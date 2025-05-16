
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

interface User {
  id: string;
  email: string;
  plan: 'free' | 'paid';
  usageCount: number;
  usageLimit: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isPaid: boolean;
  usageRemaining: number;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user data - in a real app, this would come from your backend
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@leadgenie.com',
    password: 'password123',
    plan: 'free' as const,
    usageCount: 3,
    usageLimit: 10,
  },
  {
    id: '2',
    email: 'paid@leadgenie.com',
    password: 'password123',
    plan: 'paid' as const,
    usageCount: 25,
    usageLimit: Infinity,
  },
];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('leadgenie_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('leadgenie_user');
      }
    }
    setLoading(false);
  }, []);

  // Mock login function - in a real app, this would make an API call
  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Create a user object without the password
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      
      // Store user in localStorage for persistence
      localStorage.setItem('leadgenie_user', JSON.stringify(userWithoutPassword));
      toast.success('Successfully logged in');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to login');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Mock signup function - in a real app, this would make an API call
  const signup = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if user already exists
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error('User with this email already exists');
      }
      
      // In a real app, this would create a user in your database
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        email,
        plan: 'free' as const,
        usageCount: 0,
        usageLimit: 10,
      };
      
      setUser(newUser);
      
      // Store user in localStorage for persistence
      localStorage.setItem('leadgenie_user', JSON.stringify(newUser));
      toast.success('Account created successfully');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create account');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('leadgenie_user');
    toast.success('Successfully logged out');
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isPaid: user?.plan === 'paid',
    usageRemaining: user ? user.usageLimit - user.usageCount : 0,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
