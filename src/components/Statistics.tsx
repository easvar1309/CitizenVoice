import React from 'react';
import { TrendingUp, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Grievance } from '../types';

interface StatisticsProps {
  grievances: Grievance[];
}

export const Statistics: React.FC<StatisticsProps> = ({ grievances }) => {
  const totalGrievances = grievances.length;
  const resolvedCount = grievances.filter(g => g.status === 'resolved').length;
  const reportedCount = grievances.filter(g => g.status === 'reported').length;
  const inProgressCount = grievances.filter(g => g.status === 'in-progress').length;
  const totalUpvotes = grievances.reduce((sum, g) => sum + g.upvotes, 0);

  const stats = [
    {
      icon: AlertTriangle,
      label: 'Total Issues',
      value: totalGrievances,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      label: 'Total Upvotes',
      value: totalUpvotes,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      label: 'Pending',
      value: reportedCount + inProgressCount,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: CheckCircle,
      label: 'Resolved',
      value: resolvedCount,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};