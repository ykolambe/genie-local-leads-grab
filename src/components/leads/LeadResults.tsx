
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Lead, exportLeadsAsCSV } from '@/services/leadService';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

interface LeadResultsProps {
  leads: Lead[];
  isLoading: boolean;
}

const LeadResults: React.FC<LeadResultsProps> = ({ leads, isLoading }) => {
  const [page, setPage] = useState(1);
  const { isPaid } = useAuth();
  const navigate = useNavigate();
  const itemsPerPage = 5;
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLeads = leads.slice(startIndex, endIndex);
  const totalPages = Math.ceil(leads.length / itemsPerPage);

  const handleExport = () => {
    if (!isPaid) {
      toast.error('Exporting leads is a premium feature. Please upgrade to export.');
      navigate('/pricing');
      return;
    }
    
    const csvContent = exportLeadsAsCSV(leads);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leadgenie_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Leads exported successfully');
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Searching for leads...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (leads.length === 0) {
    return null; // Don't show anything if no leads yet
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Found {leads.length} leads</CardTitle>
        <Button
          onClick={handleExport}
          className={isPaid ? 'bg-brand-secondary hover:bg-brand-secondary/90' : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'}
        >
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Business Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden md:table-cell text-right">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">
                    {lead.website ? (
                      <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        {lead.name}
                      </a>
                    ) : (
                      lead.name
                    )}
                  </TableCell>
                  <TableCell>{lead.address}</TableCell>
                  <TableCell className="hidden md:table-cell">{lead.phone || 'N/A'}</TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    <div className="flex items-center justify-end">
                      <span className="mr-1">{lead.rating || 'N/A'}</span>
                      {lead.rating && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {leads.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4">No leads found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadResults;
