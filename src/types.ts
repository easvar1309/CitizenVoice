export interface Grievance {
  id: string;
  title: string;
  description: string;
  category: GrievanceCategory;
  location: string;
  reportedBy: string;
  reportedAt: Date;
  upvotes: number;
  status: GrievanceStatus;
  hasUserVoted?: boolean;
}

export type GrievanceCategory = 
  | 'garbage'
  | 'roads'
  | 'water'
  | 'electricity'
  | 'streetlights'
  | 'drainage'
  | 'parks'
  | 'other';

export type GrievanceStatus = 
  | 'reported'
  | 'acknowledged'
  | 'in-progress'
  | 'resolved';

export interface CategoryInfo {
  id: GrievanceCategory;
  label: string;
  icon: string;
  color: string;
}