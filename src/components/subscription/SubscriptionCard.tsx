
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

interface SubscriptionCardProps {
  className?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ className }) => {
  const { user, isPaid } = useAuth();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // In a real implementation, this would initiate the Stripe checkout process
    if (isPaid) {
      toast.info('You already have a premium subscription.');
      return;
    }
    
    toast.success('Redirecting to subscription page...');
    navigate('/pricing');
  };

  const handleManage = () => {
    // In a real implementation, this would open Stripe customer portal
    toast.success('Loading subscription management...');
    navigate('/settings');
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Your Subscription</CardTitle>
        <CardDescription>Manage your subscription plan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md bg-muted p-4">
          <div className="font-medium">Current Plan:</div>
          <div className="mt-1 flex items-center space-x-2">
            <span className="text-lg font-bold">{isPaid ? 'Premium' : 'Free'}</span>
            {isPaid && (
              <span className="rounded-full bg-brand-secondary px-2 py-0.5 text-xs text-white">
                Active
              </span>
            )}
          </div>
        </div>
        
        {!isPaid && (
          <div className="space-y-2">
            <div className="font-medium">Usage:</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-brand-primary h-2.5 rounded-full" 
                style={{ width: `${(user?.usageCount || 0) * 10}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-500">
              {user?.usageCount || 0} of 10 leads used this month
            </div>
          </div>
        )}
        
        <div className="text-sm mt-4">
          {isPaid ? (
            <p>
              You have a premium subscription with unlimited leads and full export functionality.
            </p>
          ) : (
            <p>
              Upgrade to Premium for unlimited leads and CSV export functionality. 
              Free plans are limited to 10 leads per month.
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {isPaid ? (
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleManage}
          >
            Manage Subscription
          </Button>
        ) : (
          <Button 
            className="w-full bg-brand-primary hover:bg-brand-primary/90" 
            onClick={handleSubscribe}
          >
            Upgrade to Premium
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
