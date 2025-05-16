
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleFreePlanClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  const handlePremiumPlanClick = () => {
    if (isAuthenticated) {
      navigate('/settings');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <section className="py-16">
          <div className="container-app">
            <div className="text-center mb-12">
              <h1 className="heading-1 mb-4">Simple, Transparent Pricing</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Choose the plan that best fits your needs. Start for free and upgrade as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                {user?.plan === 'free' && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Your Plan
                  </div>
                )}
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold">Free</h2>
                  <p className="mt-4 text-gray-600">Great for getting started with lead generation</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <Button 
                    onClick={handleFreePlanClick}
                    className="mt-6 w-full"
                    variant="outline"
                  >
                    {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>10 leads per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Basic search functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Lead data visualization</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      <span>CSV export</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      <span>Advanced filtering</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-brand-primary relative">
                {user?.plan === 'paid' && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Your Plan
                  </div>
                )}
                <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-1 text-sm font-medium rounded-br-lg">
                  MOST POPULAR
                </div>
                <div className="p-6 border-b mt-4">
                  <h2 className="text-2xl font-bold">Premium</h2>
                  <p className="mt-4 text-gray-600">For businesses serious about lead generation</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <Button 
                    onClick={handlePremiumPlanClick}
                    className="mt-6 w-full bg-brand-primary hover:bg-brand-primary/90"
                  >
                    {user?.plan === 'paid' ? 'Manage Subscription' : 'Upgrade Now'}
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span className="font-semibold">Unlimited leads</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Advanced search functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Lead data visualization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>CSV export</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Advanced filtering options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-secondary flex-shrink-0 h-5 w-5 mr-2" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container-app">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} LeadGenie. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
