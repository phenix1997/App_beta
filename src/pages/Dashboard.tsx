import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatCard } from '../components/dashboard/StatCard';
import { AIChat } from '../components/ai/AIChat';
import { PDFUploader } from '../components/pdf/PDFUploader';
import { Book, Users, BookOpen, Library, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const recentActivities = [
    { id: 1, user: 'Alice Johnson', action: 'borrowed', book: 'The Great Gatsby', time: '2 hours ago' },
    { id: 2, user: 'Bob Smith', action: 'returned', book: '1984', time: '4 hours ago' },
    { id: 3, user: 'Carol White', action: 'reserved', book: 'To Kill a Mockingbird', time: '5 hours ago' },
  ];

  const overdueBooks = [
    { id: 1, title: 'Pride and Prejudice', user: 'David Brown', daysOverdue: 3 },
    { id: 2, title: 'The Catcher in the Rye', user: 'Emma Davis', daysOverdue: 2 },
  ];

  return (
    <DashboardLayout>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Resources"
          value="12,345"
          icon={Book}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Members"
          value="1,234"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Books Borrowed"
          value="456"
          icon={BookOpen}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Connected Libraries"
          value="15"
          icon={Library}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      {activity.action === 'borrowed' && <BookOpen className="h-4 w-4 text-amber-600" />}
                      {activity.action === 'returned' && <Book className="h-4 w-4 text-amber-600" />}
                      {activity.action === 'reserved' && <TrendingUp className="h-4 w-4 text-amber-600" />}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>{' '}
                      {activity.action} <span className="font-medium">{activity.book}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overdue Books */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Overdue Books</h2>
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="space-y-4">
              {overdueBooks.map((book) => (
                <div key={book.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-500">Borrowed by {book.user}</p>
                  </div>
                  <div className="text-sm text-red-600 font-medium">
                    {book.daysOverdue} days overdue
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI and PDF Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PDF Upload and Analysis */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload and Analyze PDFs</h2>
          <PDFUploader />
        </div>

        {/* AI Chat */}
        <AIChat />
      </div>
    </DashboardLayout>
  );
}