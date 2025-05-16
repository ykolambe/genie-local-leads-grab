
// Mock lead data service - would be replaced with actual API calls in production

// Define the Lead type
export interface Lead {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  rating?: number;
  placeId: string;
}

// Mock data for businesses
const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Sunrise Café',
    address: '123 Main Street, Portland, OR',
    phone: '(503) 555-1234',
    website: 'https://sunrise-cafe.example.com',
    rating: 4.5,
    placeId: 'abc123'
  },
  {
    id: '2',
    name: 'Tech Solutions Inc',
    address: '456 Oak Avenue, Portland, OR',
    phone: '(503) 555-5678',
    website: 'https://techsolutions.example.com',
    rating: 4.2,
    placeId: 'def456'
  },
  {
    id: '3',
    name: 'Green Leaf Restaurant',
    address: '789 Pine Road, Portland, OR',
    phone: '(503) 555-9012',
    website: 'https://greenleaf.example.com',
    rating: 4.7,
    placeId: 'ghi789'
  },
  {
    id: '4',
    name: 'City Books',
    address: '101 Elm Street, Portland, OR',
    phone: '(503) 555-3456',
    website: 'https://citybooks.example.com',
    rating: 4.0,
    placeId: 'jkl101'
  },
  {
    id: '5',
    name: 'Fitness Center',
    address: '202 Cedar Boulevard, Portland, OR',
    phone: '(503) 555-7890',
    website: 'https://fitnesscenter.example.com',
    rating: 4.3,
    placeId: 'mno202'
  },
  {
    id: '6',
    name: 'Golden Spa',
    address: '303 Maple Drive, Portland, OR',
    phone: '(503) 555-1234',
    website: 'https://goldenspa.example.com',
    rating: 4.6,
    placeId: 'pqr303'
  },
  {
    id: '7',
    name: 'Urban Apparel',
    address: '404 Birch Lane, Portland, OR',
    phone: '(503) 555-5678',
    website: 'https://urbanapparel.example.com',
    rating: 3.9,
    placeId: 'stu404'
  },
  {
    id: '8',
    name: 'Fresh Grocery',
    address: '505 Walnut Court, Portland, OR',
    phone: '(503) 555-9012',
    website: 'https://freshgrocery.example.com',
    rating: 4.1,
    placeId: 'vwx505'
  },
  {
    id: '9',
    name: 'Tech Repair Shop',
    address: '606 Spruce Way, Portland, OR',
    phone: '(503) 555-3456',
    website: 'https://techrepair.example.com',
    rating: 4.4,
    placeId: 'yza606'
  },
  {
    id: '10',
    name: 'Cozy Bakery',
    address: '707 Fir Place, Portland, OR',
    phone: '(503) 555-7890',
    website: 'https://cozybakery.example.com',
    rating: 4.8,
    placeId: 'bcd707'
  }
];

// Function to simulate API call to search leads
export const searchLeads = async (keyword: string, location: string, userId: string): Promise<Lead[]> => {
  // In a real app, this would make an actual API call
  console.log(`Searching for leads with keyword: ${keyword}, location: ${location}, userId: ${userId}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (!keyword && !location) {
    return [];
  }
  
  // Filter mock data based on search terms
  return mockLeads.filter(lead => {
    const matchesKeyword = !keyword || lead.name.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation = !location || lead.address.toLowerCase().includes(location.toLowerCase());
    return matchesKeyword && matchesLocation;
  });
};

// Function to export leads as CSV
export const exportLeadsAsCSV = (leads: Lead[]): string => {
  // Define CSV headers
  const headers = ['Name', 'Address', 'Phone', 'Website', 'Rating'];
  
  // Convert leads to CSV rows
  const rows = leads.map(lead => [
    lead.name,
    lead.address,
    lead.phone || '',
    lead.website || '',
    lead.rating?.toString() || ''
  ]);
  
  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  return csvContent;
};
