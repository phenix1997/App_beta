import React from 'react';
import { BookOpen, Github, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">LIBRISCONNECTI</span>
            </div>
            <p className="text-sm">
              Connecting libraries and readers worldwide. Making knowledge accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Digital Library</a></li>
              <li><a href="#" className="text-sm hover:text-white">Research Tools</a></li>
              <li><a href="#" className="text-sm hover:text-white">Academic Journals</a></li>
              <li><a href="#" className="text-sm hover:text-white">E-Books</a></li>
              <li><a href="#" className="text-sm hover:text-white">Audiobooks</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Book Clubs</a></li>
              <li><a href="#" className="text-sm hover:text-white">Forums</a></li>
              <li><a href="#" className="text-sm hover:text-white">Events</a></li>
              <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white">Newsletter</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-white">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm">
              © {currentYear} LibrisConnecti. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-sm hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:text-white">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}