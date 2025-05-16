
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { ChevronRight, Search, Globe, Download, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
          <div className="container-app">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-brand-primary font-medium text-sm mb-6">
                Lead Generation Made Simple
              </span>
              <h1 className="heading-1 text-brand-primary mb-6 text-4xl md:text-5xl font-bold">
                Find more leads, close more deals with <span className="text-brand-secondary">LeadGenie</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Discover local business leads effortlessly with our powerful search tool. 
                Get accurate data, visualize opportunities, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="text-base py-6 px-8 bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2"
                  onClick={() => navigate('/signup')}
                >
                  Get Started for Free <ChevronRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="text-base py-6 px-8 border-gray-300"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing
                </Button>
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-2 md:p-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden">
                  <div className="bg-gray-900 p-4 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 flex-1 max-w-sm">
                      leadgenie.app/dashboard
                    </div>
                  </div>
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="flex-1 border-r border-gray-200 pr-6">
                      <div className="h-8 bg-gray-100 w-1/2 mb-4 rounded"></div>
                      <div className="h-4 bg-gray-100 w-full mb-2 rounded"></div>
                      <div className="h-4 bg-gray-100 w-4/5 mb-6 rounded"></div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="h-24 bg-blue-50 rounded-lg border border-blue-100"></div>
                        <div className="h-24 bg-green-50 rounded-lg border border-green-100"></div>
                      </div>
                      
                      <div className="h-40 bg-gray-50 rounded-lg border border-gray-200"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="h-8 bg-gray-100 w-3/4 mb-4 rounded"></div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map(item => (
                          <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="h-6 w-6 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div className="ml-3 flex-1">
                              <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                            </div>
                            <div className="h-5 w-20 bg-blue-100 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Cards */}
        <section className="py-20">
          <div className="container-app">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-3xl font-bold">Everything you need to find quality leads</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                LeadGenie helps you discover and connect with potential clients in your target area with powerful features designed for business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Location-based Search</h3>
                <p className="text-gray-600">
                  Find businesses in specific locations with our advanced filtering options and radius search capabilities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-brand-secondary mb-6">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
                <p className="text-gray-600">
                  View lead data in easily digestible formats with our intuitive dashboard and interactive charts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                  <Download className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Export Functionality</h3>
                <p className="text-gray-600">
                  Easily export lead data as CSV files for seamless integration with your CRM or marketing tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20">
          <div className="container-app">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-3xl font-bold">How LeadGenie Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes finding and managing leads simple and effective.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
                {[
                  {
                    step: "01",
                    title: "Search",
                    description: "Enter keywords and location to find businesses that match your criteria."
                  },
                  {
                    step: "02",
                    title: "Analyze",
                    description: "Review detailed information about each lead including contact details and ratings."
                  },
                  {
                    step: "03",
                    title: "Export",
                    description: "Download your leads as a CSV file to use in your favorite CRM or spreadsheet."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    
                    {index < 2 && (
                      <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 w-1/2 h-2">
                        <div className="h-0.5 bg-gray-200 w-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container-app">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center">
                <div className="mx-auto mb-6 flex items-center justify-center gap-0.5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-600 italic mb-6">
                  "LeadGenie has transformed how we find new clients. The location-based search helped us discover opportunities we would have otherwise missed."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-3 text-left">
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient Background */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-accent py-20">
          <div className="container-app">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="heading-2 mb-6 text-3xl font-bold">Ready to find your next customers?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Start with our free plan and upgrade anytime as your business grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  className="bg-white text-brand-primary hover:bg-gray-100 text-base py-6 px-8"
                  onClick={() => navigate('/signup')}
                >
                  Start Finding Leads
                </Button>
                <Button 
                  variant="outline" 
                  className="text-base py-6 px-8 border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container-app">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">LeadGenie</h3>
              <p className="text-gray-400">
                Discover local business leads effortlessly with our powerful search tool.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LeadGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
