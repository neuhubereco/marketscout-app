import { CheckCircleIcon, ChartBarIcon, DocumentTextIcon, ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { CheckoutButton } from './components/CheckoutButton';

export default function Home() {
  const stripeButtonClasses = "rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center justify-center";
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">MarketScout</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">How it works</a>
              <a href="#sample" className="text-gray-700 hover:text-primary-600 transition-colors">Sample</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">FAQ</a>
            </nav>
            <div className={stripeButtonClasses}>
              <CheckoutButton priceId={priceId}>
                Get Your Report – €49
              </CheckoutButton>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 mb-6">
              <span className="h-5 w-5 text-primary-600 mr-2">⚡</span>
              <span className="text-primary-700 font-medium">AI‑Powered Competitive Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get a <span className="text-primary-600">10‑Page</span> Competitive Intelligence Report in{' '}
              <span className="text-primary-600">24 Hours</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Tell us your niche. Our AI researches competitors, pricing, gaps, and opportunities – then delivers a comprehensive PDF with actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className={stripeButtonClasses}>
                <CheckoutButton priceId={priceId}>
                  Get Your Report – €49
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </CheckoutButton>
              </div>
              <button className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                See Sample Report
              </button>
            </div>
            <p className="mt-6 text-gray-500 flex items-center justify-center">
              <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
              No subscription. One‑time payment. 100% satisfaction or money back.
            </p>
          </div>
        </section>

        {/* Rest of the content... */}
        
      </main>
    </div>
  );
}