
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import SignupForm from '@/components/auth/SignupForm';
import Navbar from '@/components/layout/Navbar';

const SignupPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="blob-shape bg-brand-primary/30 w-96 h-96 top-[-200px] right-[-100px] animate-spin-slow"></div>
      <div className="blob-shape bg-brand-accent/20 w-72 h-72 bottom-[-100px] left-[-100px] animate-float"></div>
      
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-fuchsia-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-md relative z-10">
          <div className="glass-card p-8 rounded-xl shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 p-3 rounded-full bg-brand-accent/10">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 font-display">Create an account</h1>
              <p className="text-gray-600 mt-2">Start finding leads with LeadGenie</p>
            </div>
            <SignupForm />
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-white/80 shadow-sm text-xs font-medium text-gray-500">
              Join thousands of users • Free trial available • No credit card required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
