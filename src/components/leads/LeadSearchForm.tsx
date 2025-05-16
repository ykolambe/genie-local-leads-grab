
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

interface LeadSearchFormProps {
  onSearch: (keyword: string, location: string) => void;
  isLoading: boolean;
}

const LeadSearchForm: React.FC<LeadSearchFormProps> = ({ onSearch, isLoading }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const { user, usageRemaining, isPaid } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!keyword && !location) {
      toast.error('Please enter at least a keyword or location');
      return;
    }
    
    if (usageRemaining <= 0 && !isPaid) {
      toast.error('You have reached your monthly limit. Please upgrade to continue searching.');
      return;
    }
    
    onSearch(keyword, location);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Business Type / Keyword</Label>
              <Input
                id="keyword"
                placeholder="e.g. Restaurant, Plumber, Coffee Shop"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g. Portland, OR or 97209"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              {!isPaid && (
                <p className="text-sm text-gray-500">
                  {usageRemaining} / 10 searches remaining this month
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              className="bg-brand-primary hover:bg-brand-primary/90"
              disabled={isLoading}
            >
              {isLoading ? 'Searching...' : 'Search Leads'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadSearchForm;
