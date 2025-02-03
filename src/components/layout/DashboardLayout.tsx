import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Search, Bell, ChevronDown, Menu, Home, Users, BookMarked,
  MessageSquare, Settings, BarChart2, Library, LogOut, X
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'resources', label: 'Resources', icon: BookMarked },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'forum', label: 'Forum', icon: MessageSquare },
    { id: 'libraries', label: 'Libraries', icon: Library },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-amber-400" />
            </div>
            <span className="ml-2 text-xl font-bold text-black">LIBRISCONNECTI<sup className="text-xs">TM</sup></span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-4 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg mb-1 ${
                  activeMenu === item.id
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}

          <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg mt-4">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-200 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center flex-1">
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="text-gray-500 hover:text-gray-600 lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </button>

                {/* Compact Search Bar */}
                <div className="ml-4 max-w-xs flex-1">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className={`h-4 w-4 ${isSearchFocused ? 'text-gray-900' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="search"
                      placeholder="Search..."
                      className="block w-full rounded-full border-0 py-1.5 pl-10 pr-4 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 sm:leading-6"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                  </div>
                </div>
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                </button>
                <div className="relative">
                  <button className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="hidden md:flex items-center">
                      <span className="text-sm font-medium text-gray-700">John Doe</span>
                      <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}