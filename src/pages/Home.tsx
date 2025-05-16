
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container-app">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 text-brand-primary mb-6">
                Find more leads, close more deals with LeadGenie
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover local business leads effortlessly with our powerful search tool. Get accurate data, visualize opportunities, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="text-base py-6 px-8 bg-brand-primary hover:bg-brand-primary/90"
                  onClick={() => navigate('/signup')}
                >
                  Get Started for Free
                </Button>
                <Button 
                  variant="outline" 
                  className="text-base py-6 px-8"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container-app">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Everything you need to find quality leads</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                LeadGenie helps you discover and connect with potential clients in your target area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-brand-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location-based Search</h3>
                <p className="text-gray-600">
                  Find businesses in specific locations with our advanced location filtering options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-brand-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
                <p className="text-gray-600">
                  View lead data in easily digestible formats with our intuitive dashboard.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-brand-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Export Functionality</h3>
                <p className="text-gray-600">
                  Easily export lead data as CSV files for use in your CRM or marketing tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-primary py-16">
          <div className="container-app">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="heading-2 mb-6">Ready to find your next customers?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Start with our free plan and upgrade anytime as your business grows.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-brand-primary hover:bg-gray-100 text-base py-6 px-8"
                onClick={() => navigate('/signup')}
              >
                Start Finding Leads
              </Button>
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

export default HomePage;
