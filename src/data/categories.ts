import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'garbage', label: 'Garbage & Waste', icon: 'Trash2', color: 'text-orange-600' },
  { id: 'roads', label: 'Roads & Traffic', icon: 'Construction', color: 'text-gray-600' },
  { id: 'water', label: 'Water Supply', icon: 'Droplets', color: 'text-blue-600' },
  { id: 'electricity', label: 'Electricity', icon: 'Zap', color: 'text-yellow-600' },
  { id: 'streetlights', label: 'Street Lights', icon: 'Lightbulb', color: 'text-purple-600' },
  { id: 'drainage', label: 'Drainage', icon: 'CloudRain', color: 'text-cyan-600' },
  { id: 'parks', label: 'Parks & Recreation', icon: 'Trees', color: 'text-green-600' },
  { id: 'other', label: 'Other Issues', icon: 'MoreHorizontal', color: 'text-slate-600' }
];