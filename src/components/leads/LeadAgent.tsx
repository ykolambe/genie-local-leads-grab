
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SearchIcon, MapPinIcon, CompassIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/sonner';
import { Lead } from '@/services/leadService';

interface LeadAgentProps {
  onSearchComplete: (leads: Lead[]) => void;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
}

const LeadAgent: React.FC<LeadAgentProps> = ({ 
  onSearchComplete, 
  isSearching, 
  setIsSearching 
}) => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'agent', content: string}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user, usageRemaining, isPaid } = useAuth();

  // Initial agent greeting
  useEffect(() => {
    setMessages([
      { 
        type: 'agent', 
        content: 'Hi there! I\'m your LeadGenie AI Assistant. I can help you find business leads. Try asking me something like "Find coffee shops in Portland" or "Search for plumbers near Seattle".' 
      }
    ]);
  }, []);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    if (usageRemaining <= 0 && !isPaid) {
      toast.error('You have reached your monthly limit. Please upgrade to continue searching.');
      return;
    }

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', content: prompt }]);
    
    // Process the prompt
    const userPrompt = prompt;
    setPrompt('');
    setIsSearching(true);
    
    // Add agent thinking message
    setMessages(prev => [...prev, { type: 'agent', content: 'Searching for leads...' }]);
    
    try {
      // Extract search parameters from natural language prompt
      const params = parsePrompt(userPrompt);
      
      // In a real app, we would call an API here
      // For now, simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Import the searchLeads function from the service
      const { searchLeads } = await import('@/services/leadService');
      
      if (!user?.id) return;
      
      // Call the search function with extracted parameters
      const results = await searchLeads(params.keyword, params.location, user.id);
      
      // Update agent response
      setMessages(prev => {
        // Replace the "Searching..." message with the results message
        const newMessages = [...prev];
        newMessages.pop(); // Remove "Searching..." message
        
        let responseMessage = '';
        if (results.length > 0) {
          responseMessage = `I found ${results.length} leads matching "${params.keyword}" in ${params.location}! Here's what I found:`;
        } else {
          responseMessage = `I couldn't find any leads matching "${params.keyword}" in ${params.location}. Try a different search or location.`;
        }
        
        return [...newMessages, { type: 'agent', content: responseMessage }];
      });
      
      // Pass results back to parent component
      onSearchComplete(results);
      toast.success(`Found ${results.length} leads matching your search`);
    } catch (error) {
      console.error('Search error:', error);
      
      // Update agent response with error message
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages.pop(); // Remove "Searching..." message
        return [...newMessages, { type: 'agent', content: 'Sorry, I encountered an error while searching. Please try again.' }];
      });
      
      toast.error('Error searching for leads. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };
  
  // Simple prompt parser to extract keyword and location
  const parsePrompt = (text: string): { keyword: string; location: string } => {
    const lowercaseText = text.toLowerCase();
    
    // Extract location (after "in" or "near")
    let location = '';
    const locationMatches = lowercaseText.match(/(in|near|around|at)\s+([a-z\s,]+)/i);
    if (locationMatches && locationMatches[2]) {
      location = locationMatches[2].trim();
    } else {
      // Default location if not specified
      location = 'Portland';
    }
    
    // Extract business type/keyword
    let keyword = '';
    const keywordMatches = lowercaseText.match(/(find|search for|get|looking for|need)\s+([a-z\s]+?)(?:\s+(?:in|near|around|at)|$)/i);
    if (keywordMatches && keywordMatches[2]) {
      keyword = keywordMatches[2].trim();
    } else {
      // Use the first few words if no pattern matched
      const words = lowercaseText.split(' ').filter(w => !['find', 'search', 'get', 'in', 'near'].includes(w));
      keyword = words.slice(0, 3).join(' ');
    }
    
    return {
      keyword: keyword || 'business',
      location: location || 'Portland'
    };
  };

  return (
    <Card className="relative h-[400px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <div className="rounded-full bg-brand-primary/10 p-2 mr-2">
            <CompassIcon className="h-5 w-5 text-brand-primary" />
          </div>
          LeadGenie AI Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto pb-0">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-brand-primary text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="mt-auto border-t p-4">
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me to find leads (e.g., Find restaurants in Chicago)"
            disabled={isSearching}
            className="flex-1"
          />
          <Button 
            type="submit" 
            className="bg-brand-primary hover:bg-brand-primary/90"
            disabled={isSearching}
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default LeadAgent;
