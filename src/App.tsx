import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterTabs } from './components/FilterTabs';
import { Statistics } from './components/Statistics';
import { GrievanceCard } from './components/GrievanceCard';
import { ReportModal } from './components/ReportModal';
import { mockGrievances } from './data/mockData';
import { Grievance, GrievanceCategory, GrievanceStatus } from './types';
import { ArrowUp } from 'lucide-react';

function App() {
  const [grievances, setGrievances] = useState<Grievance[]>(mockGrievances);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GrievanceCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<GrievanceStatus | 'all'>('all');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'upvotes' | 'date'>('upvotes');

  // Filter and search grievances
  const filteredGrievances = useMemo(() => {
    let filtered = grievances;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(grievance =>
        grievance.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grievance.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grievance.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(grievance => grievance.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(grievance => grievance.status === selectedStatus);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'upvotes') {
        return b.upvotes - a.upvotes;
      } else {
        return b.reportedAt.getTime() - a.reportedAt.getTime();
      }
    });

    return filtered;
  }, [grievances, searchTerm, selectedCategory, selectedStatus, sortBy]);

  const handleUpvote = (id: string) => {
    setGrievances(prevGrievances =>
      prevGrievances.map(grievance =>
        grievance.id === id
          ? {
              ...grievance,
              upvotes: grievance.hasUserVoted ? grievance.upvotes - 1 : grievance.upvotes + 1,
              hasUserVoted: !grievance.hasUserVoted
            }
          : grievance
      )
    );
  };

  const handleReportSubmit = (data: {
    title: string;
    description: string;
    category: GrievanceCategory;
    location: string;
    reportedBy: string;
  }) => {
    const newGrievance: Grievance = {
      id: Date.now().toString(),
      ...data,
      reportedAt: new Date(),
      upvotes: 1,
      status: 'reported',
      hasUserVoted: true,
    };
    
    setGrievances(prev => [newGrievance, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onReportClick={() => setIsReportModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Public Grievances</h2>
          <p className="text-gray-600">
            Report local civic issues and help prioritize community concerns through voting.
          </p>
        </div>

        <Statistics grievances={grievances} />

        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        <FilterTabs
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-700">
              Showing {filteredGrievances.length} of {grievances.length} issues
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'upvotes' | 'date')}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="upvotes">Most Upvoted</option>
              <option value="date">Most Recent</option>
            </select>
          </div>
        </div>

        {filteredGrievances.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 max-w-md mx-auto">
              <ArrowUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Issues Found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Be the first to report an issue in your community.'}
              </p>
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Report First Issue
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {filteredGrievances.map((grievance) => (
              <GrievanceCard
                key={grievance.id}
                grievance={grievance}
                onUpvote={handleUpvote}
              />
            ))}
          </div>
        )}
      </main>

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmit={handleReportSubmit}
      />
    </div>
  );
}

export default App;