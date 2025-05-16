
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const { user, isPaid } = useAuth();
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    // In a real implementation, this would initiate the Stripe checkout process
    toast.success('Opening Stripe checkout...');
    // Simulate a successful subscription for demo purposes
    setTimeout(() => {
      toast.success('Subscription successful! Redirecting to dashboard...');
      navigate('/dashboard');
    }, 1500);
  };

  const handleManageSubscriptionClick = () => {
    // In a real implementation, this would open the Stripe Customer Portal
    toast.success('Opening subscription management...');
  };

  const handleCancelSubscriptionClick = () => {
    toast.error('This would cancel your subscription in a real app');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container-app py-8">
          <h1 className="heading-2 mb-6">Settings</h1>
          
          <div className="grid gap-6">
            {/* Account Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Manage your account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p>{user?.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Account Type</h3>
                    <p>{isPaid ? 'Premium' : 'Free'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Subscription Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>
                  Manage your subscription plan and billing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-md bg-muted p-6">
                  <h3 className="font-medium mb-4">Current Plan</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`border rounded-md p-4 ${isPaid ? 'border-brand-primary bg-brand-primary/5' : ''}`}>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Free Plan</h4>
                        {!isPaid && <span className="text-xs font-medium bg-brand-primary text-white px-2 py-0.5 rounded-full">Current</span>}
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Limited to 10 leads per month</p>
                      <p className="font-medium">$0 <span className="text-sm font-normal text-gray-500">/month</span></p>
                    </div>
                    
                    <div className={`border rounded-md p-4 ${isPaid ? 'border-brand-primary bg-brand-primary/5' : ''}`}>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Premium Plan</h4>
                        {isPaid && <span className="text-xs font-medium bg-brand-primary text-white px-2 py-0.5 rounded-full">Current</span>}
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Unlimited leads with full export functionality</p>
                      <p className="font-medium">$49 <span className="text-sm font-normal text-gray-500">/month</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {isPaid ? (
                    <>
                      <Button 
                        variant="outline"
                        onClick={handleManageSubscriptionClick}
                      >
                        Manage Subscription
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleCancelSubscriptionClick}
                        className="text-brand-error hover:text-brand-error"
                      >
                        Cancel Subscription
                      </Button>
                    </>
                  ) : (
                    <Button 
                      className="bg-brand-primary hover:bg-brand-primary/90"
                      onClick={handleSubscribeClick}
                    >
                      Upgrade to Premium
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
