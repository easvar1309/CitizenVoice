import React from 'react';
import { ChevronUp, MapPin, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Grievance } from '../types';
import { categories } from '../data/categories';

interface GrievanceCardProps {
  grievance: Grievance;
  onUpvote: (id: string) => void;
}

export const GrievanceCard: React.FC<GrievanceCardProps> = ({ grievance, onUpvote }) => {
  const category = categories.find(cat => cat.id === grievance.category);
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'reported':
        return { icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-50', text: 'Reported' };
      case 'acknowledged':
        return { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', text: 'Acknowledged' };
      case 'in-progress':
        return { icon: Loader, color: 'text-purple-600', bg: 'bg-purple-50', text: 'In Progress' };
      case 'resolved':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', text: 'Resolved' };
      default:
        return { icon: AlertCircle, color: 'text-gray-600', bg: 'bg-gray-50', text: 'Unknown' };
    }
  };

  const statusConfig = getStatusConfig(grievance.status);
  const StatusIcon = statusConfig.icon;
  const daysAgo = Math.floor((Date.now() - grievance.reportedAt.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {grievance.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-3">
              {grievance.description}
            </p>
          </div>
          
          <button
            onClick={() => onUpvote(grievance.id)}
            className={`flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg transition-all duration-200 ${
              grievance.hasUserVoted
                ? 'bg-blue-50 text-blue-600 border-2 border-blue-200'
                : 'bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 border-2 border-transparent hover:border-blue-200'
            }`}
          >
            <ChevronUp className="h-5 w-5 mb-1" />
            <span className="text-sm font-medium">{grievance.upvotes}</span>
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{grievance.location}</span>
            </div>
            
            {category && (
              <div className={`flex items-center space-x-1 ${category.color}`}>
                <span className="font-medium">{category.label}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-gray-500">{daysAgo} days ago</span>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${statusConfig.bg}`}>
              <StatusIcon className={`h-3 w-3 ${statusConfig.color}`} />
              <span className={`text-xs font-medium ${statusConfig.color}`}>
                {statusConfig.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};