import { Feature, Testimonial } from '@/types/homepage';

export const features: Feature[] = [
  {
    id: 'live-classes',
    title: 'Live Interactive Classes',
    description: 'Join real-time sessions with top educators. Ask questions, participate in discussions, and learn alongside peers.',
    icon: 'video',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'expert-teachers',
    title: 'Expert Teachers',
    description: 'Learn from industry professionals and experienced educators who have guided thousands to success.',
    icon: 'users',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 'career-growth',
    title: 'Career Transformation',
    description: 'Get personalized career guidance, interview preparation, and job placement assistance.',
    icon: 'trending-up',
    color: 'from-green-500 to-teal-400',
  },
  {
    id: 'lifetime-access',
    title: 'Lifetime Access',
    description: 'Once enrolled, access all course materials, recordings, and updates forever. Learn at your own pace.',
    icon: 'infinity',
    color: 'from-orange-500 to-red-400',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'TCS',
    content: 'Knowledge Heist transformed my career completely. The live classes and practical approach helped me land my dream job in just 6 months.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=150&h=150&fit=crop&crop=face',
    result: 'Got 40% salary hike',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Data Scientist',
    company: 'Infosys',
    content: 'The quality of teaching and mentorship is exceptional. Teachers are always available to help and the community is very supportive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    result: 'Career switch success',
  },
  {
    id: '3',
    name: 'Sneha Patel',
    role: 'Product Manager',
    company: 'Wipro',
    content: 'From zero coding knowledge to landing a PM role. The structured curriculum and real-world projects made all the difference.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    result: 'Complete career change',
  },
  {
    id: '4',
    name: 'Amit Singh',
    role: 'Full Stack Developer',
    company: 'Accenture',
    content: 'Best investment I made for my career. The placement assistance and interview preparation were game-changers.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    result: 'Placed in 3 months',
  },
  {
    id: '5',
    name: 'Kavya Reddy',
    role: 'UI/UX Designer',
    company: 'Microsoft',
    content: 'The personalized mentorship and industry connections helped me transition from a non-tech background to landing at Microsoft.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    result: 'Dream job achieved',
  },
];

export const stats = {
  students: '50K+',
  courses: '200+',
  success_rate: '95%',
  experience: '10+',
};
