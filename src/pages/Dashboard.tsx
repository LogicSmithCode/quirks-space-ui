import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User as UserIcon } from 'lucide-react';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <UserIcon className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="text-gray-400">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your dashboard widgets here */}
          </div>
        </div>
      </div>
    </div>
  );
}