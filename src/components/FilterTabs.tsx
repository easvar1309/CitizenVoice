import React from 'react';
import { GrievanceCategory, GrievanceStatus } from '../types';
import { categories } from '../data/categories';
import { Filter } from 'lucide-react';

interface FilterTabsProps {
  selectedCategory: GrievanceCategory | 'all';
  selectedStatus: GrievanceStatus | 'all';
  onCategoryChange: (category: GrievanceCategory | 'all') => void;
  onStatusChange: (status: GrievanceStatus | 'all') => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
}) => {
  const statusOptions = [
    { id: 'all', label: 'All Status' },
    { id: 'reported', label: 'Reported' },
    { id: 'acknowledged', label: 'Acknowledged' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'resolved', label: 'Resolved' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h3 className="font-semibold text-gray-900">Filter Issues</h3>
      </div>
      
      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => (
              <button
                key={status.id}
                onClick={() => onStatusChange(status.id as GrievanceStatus | 'all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedStatus === status.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};