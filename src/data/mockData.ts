import { Grievance, GrievanceCategory } from '../types';

export const mockGrievances: Grievance[] = [
  {
    id: '1',
    title: 'Overflowing garbage bins near bus stop',
    description: 'The garbage bins near the T. Nagar bus stand have been overflowing for the past week. It\'s creating unsanitary conditions and attracting stray animals.',
    category: 'garbage' as GrievanceCategory,
    location: 'T. Nagar Bus Stand, Chennai',
    reportedBy: 'Easvar',
    reportedAt: new Date('2024-01-15'),
    upvotes: 147,
    status: 'reported'
  },
  {
    id: '2',
    title: 'Large pothole causing accidents',
    description: 'There\'s a massive pothole on Anna Salai that has caused several vehicle damages. It becomes worse during the rainy season.',
    category: 'roads' as GrievanceCategory,
    location: 'Anna Salai, Near Spencer Plaza, Chennai',
    reportedBy: 'Vinay',
    reportedAt: new Date('2024-01-14'),
    upvotes: 203,
    status: 'acknowledged'
  },
  {
    id: '3',
    title: 'Water leakage in residential area',
    description: 'Continuous water leakage from the main pipeline is flooding the street and wasting precious water resources.',
    category: 'water' as GrievanceCategory,
    location: 'Velachery Main Road, Block A, Chennai',
    reportedBy: 'Dharun',
    reportedAt: new Date('2024-01-13'),
    upvotes: 89,
    status: 'in-progress'
  },
  {
    id: '4',
    title: 'Street lights not working for weeks',
    description: 'Multiple street lights in our area have been non-functional for over 3 weeks, making it unsafe to walk at night.',
    category: 'streetlights' as GrievanceCategory,
    location: 'Adyar Gandhi Nagar, Chennai',
    reportedBy: 'Soorya',
    reportedAt: new Date('2024-01-12'),
    upvotes: 156,
    status: 'reported'
  },
  {
    id: '5',
    title: 'Clogged drainage system causing waterlogging',
    description: 'The drainage system is completely blocked, causing severe waterlogging even during light rain.',
    category: 'drainage' as GrievanceCategory,
    location: 'George Town Market, Chennai',
    reportedBy: 'Churchil',
    reportedAt: new Date('2024-01-11'),
    upvotes: 178,
    status: 'acknowledged'
  },
  {
    id: '6',
    title: 'Broken playground equipment in park',
    description: 'Several pieces of playground equipment are broken and pose safety risks to children. Needs urgent repair.',
    category: 'parks' as GrievanceCategory,
    location: 'Marina Beach Park, Chennai',
    reportedBy: 'Raakesh',
    reportedAt: new Date('2024-01-10'),
    upvotes: 94,
    status: 'resolved'
  }
];
