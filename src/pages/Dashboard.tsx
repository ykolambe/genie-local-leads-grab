
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import StatsCard from '@/components/dashboard/StatsCard';
import LeadSearchForm from '@/components/leads/LeadSearchForm';
import LeadResults from '@/components/leads/LeadResults';
import SubscriptionCard from '@/components/subscription/SubscriptionCard';
import { Lead, searchLeads } from '@/services/leadService';
import { toast } from '@/components/ui/sonner';

const DashboardPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { user, isPaid } = useAuth();

  const handleSearch = async (keyword: string, location: string) => {
    if (!user?.id) return;
    
    setIsSearching(true);
    
    try {
      const results = await searchLeads(keyword, location, user.id);
      setLeads(results);
      setSearchPerformed(true);
      
      // In a real app, this would update the user's usage count in the backend
      // and then refresh the auth context
      if (results.length > 0) {
        toast.success(`Found ${results.length} leads matching your search`);
      } else {
        toast.info('No leads found matching your search criteria');
      }
    } catch (error) {
      console.error('Search error:', error);
      toast.error('Error searching for leads. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container-app py-8">
          <h1 className="heading-2 mb-6">Dashboard</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Leads Generated"
              value={user?.usageCount || 0}
              description={isPaid ? "Unlimited available" : `${10 - (user?.usageCount || 0)} remaining this month`}
            />
            <StatsCard
              title="Account Status"
              value={isPaid ? "Premium" : "Free"}
              description={isPaid ? "Full access to all features" : "Limited to 10 leads/month"}
            />
            <StatsCard
              title="Search Results"
              value={searchPerformed ? leads.length : 0}
              description={searchPerformed ? "From your last search" : "Perform a search to find leads"}
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <LeadSearchForm 
                onSearch={handleSearch}
                isLoading={isSearching}
              />
              
              {(leads.length > 0 || isSearching) && (
                <LeadResults 
                  leads={leads}
                  isLoading={isSearching}
                />
              )}
              
              {!searchPerformed && !isSearching && (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium mb-2">Ready to find new leads?</h3>
                  <p className="text-gray-600 mb-4">
                    Enter a business type and location above to start your search
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <p className="text-sm text-gray-500">
                      {isPaid ? (
                        "Your premium plan gives you unlimited searches and export capabilities"
                      ) : (
                        "Free accounts are limited to 10 leads per month"
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <SubscriptionCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
