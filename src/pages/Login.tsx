
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/layout/Navbar';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="blob-shape bg-brand-primary/30 w-96 h-96 top-[-200px] left-[-100px] animate-spin-slow"></div>
      <div className="blob-shape bg-brand-accent/20 w-72 h-72 bottom-[-100px] right-[-100px] animate-float"></div>
      
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-fuchsia-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-md relative z-10">
          <div className="glass-card p-8 rounded-xl shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 p-3 rounded-full bg-brand-primary/10">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 font-display">Welcome back</h1>
              <p className="text-gray-600 mt-2">Log in to your LeadGenie account</p>
            </div>
            <LoginForm />
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-white/80 shadow-sm text-xs font-medium text-gray-500">
              Powered by advanced AI • Secure login • SSL encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
