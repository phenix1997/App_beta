import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle } from 'lucide-react';
import { Footer } from '../components/layout/Footer';

export function LandingPage() {
  const [showTrendingBooks, setShowTrendingBooks] = useState(true);

  const trendingBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      views: "2.3M views"
    },
    {
      id: 2,
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      views: "1.8M views"
    },
    {
      id: 3,
      title: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      views: "1.5M views"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Digital Reading",
      excerpt: "How technology is transforming our reading habits...",
      author: "Sarah Johnson",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Why Physical Books Still Matter",
      excerpt: "In an increasingly digital world, physical books offer unique benefits...",
      author: "Michael Chen",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building a Reading Habit",
      excerpt: "Simple strategies to make reading a daily practice...",
      author: "Emma Thompson",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-amber-400 border-b border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-amber-400" />
                </div>
                <span className="ml-2 text-xl font-bold text-black">LIBRISCONNECTI<sup className="text-xs">TM</sup></span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/chat" className="text-black hover:text-gray-700 flex items-center">
                <MessageCircle className="h-5 w-5 mr-1" />
                Chat
              </Link>
              <Link to="/write" className="text-black hover:text-gray-700">Write</Link>
              <Link to="/signin" className="text-black hover:text-gray-700">Sign in</Link>
              <Link to="/signin" className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-800">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-amber-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="max-w-xl">
              <h1 className="text-8xl font-serif mb-6">
                Stay curious.
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                Discover stories, thinking, and expertise from writers on any topic.
              </p>
              <Link to="/signin" className="bg-black text-white rounded-full px-8 py-3 text-xl font-medium hover:bg-gray-800 inline-block">
                Start reading
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="text-2xl font-mono opacity-60 select-none">
                {Array(15).fill('M').map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block"
                    style={{
                      transform: `translate(${Math.sin(i) * 50}px, ${Math.cos(i) * 30}px)`,
                      opacity: 0.5 + Math.random() * 0.5
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Books & Articles Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 mb-8">
            <button
              className={`text-lg font-medium ${showTrendingBooks ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setShowTrendingBooks(true)}
            >
              Trending Books
            </button>
            <button
              className={`text-lg font-medium ${!showTrendingBooks ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setShowTrendingBooks(false)}
            >
              Featured Articles
            </button>
          </div>

          {showTrendingBooks ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingBooks.map(book => (
                <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-4">{book.author}</p>
                    <p className="text-sm text-gray-500">{book.views}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map(article => (
                <div key={article.id} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span className="mx-2">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}