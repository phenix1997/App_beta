import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';

export function SignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Implement Google Sign In
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-amber-400" />
              </div>
            </div>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.google.com/favicon.ico"
                alt="Google logo"
              />
              Sign in with Google
            </button>
            <Link
              to="/signin/email"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Sign in with Email
            </Link>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            No account?{' '}
            <Link to="/signin/email" className="font-medium text-amber-600 hover:text-amber-500">
              Create one
            </Link>
          </p>
        </div>
      </div>
      <Link to="/" className="absolute top-4 right-4">
        <X className="h-6 w-6 text-gray-400 hover:text-gray-500" />
      </Link>
    </div>
  );
}