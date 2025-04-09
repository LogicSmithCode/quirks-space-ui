import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Users } from 'lucide-react';

export default function Admin() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8 text-blue-500" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold">Waitlist Management</h2>
              </div>
              
              {/* Add waitlist management UI here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}