
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container-app py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-brand-primary">LeadGenie</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full h-8 w-8 p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-brand-primary text-white">
                        {user?.email.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium">{user?.email}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Plan: {user?.plan === 'paid' ? 'Premium' : 'Free'}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="w-full cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="w-full cursor-pointer">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    className="text-brand-error focus:text-brand-error cursor-pointer"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="space-x-2">
                <Button variant="outline" onClick={() => navigate('/login')}>
                  Log in
                </Button>
                <Button className="bg-brand-primary hover:bg-brand-primary/90" onClick={() => navigate('/signup')}>
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
