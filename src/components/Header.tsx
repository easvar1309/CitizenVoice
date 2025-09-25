import React from 'react';
import { Vote, Users, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  onReportClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReportClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CitizenVoice</h1>
              <p className="text-sm text-gray-600">Public Grievance Platform</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-4 w-4" />
              <span className="text-sm">12,847 Citizens</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">1,432 Issues Resolved</span>
            </div>
          </div>
          
          <button
            onClick={onReportClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <AlertTriangle className="h-4 w-4" />
            <span>Report Issue</span>
          </button>
        </div>
      </div>
    </header>
  );
};