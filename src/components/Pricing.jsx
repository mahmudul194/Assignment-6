import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-500 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full btn border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 rounded-xl h-12">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="bg-purple-600 rounded-3xl p-8 shadow-xl shadow-purple-600/20 text-white relative transform md:-translate-y-4 h-full border border-purple-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-purple-200 mb-6">Best for professionals</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="text-purple-200 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-400" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full btn bg-white hover:bg-gray-100 text-purple-600 border-none rounded-xl h-12 font-bold shadow-lg shadow-white/10">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-6">For teams and businesses</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-500 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl h-12 shadow-lg shadow-purple-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      {/* Ready Action */}
      <div className="mt-32 bg-linear-to-r from-[#6d28d9] to-[#9333ea] py-20 px-4 text-center">
        <h2 className="text-4xl md:text-[40px] font-bold text-white mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Join thousands of professionals who are already using Digitools to work smarter.<br/>
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white hover:bg-gray-100 text-[#7c3aed] rounded-full px-8 h-12 border-none font-medium">
            Explore Products
          </button>
          <button className="btn bg-transparent hover:bg-white/10 text-white rounded-full px-8 h-12 border border-white font-medium hover:border-white">
            View Pricing
          </button>
        </div>
        <p className="text-white/70 text-sm mt-8">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </div>
  );
}
