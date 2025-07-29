// Homepage specific types for Knowledge Heist

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  result: string;
}

export interface HomepageData {
  features: Feature[];
  testimonials: Testimonial[];
  stats: {
    students: string;
    courses: string;
    success_rate: string;
    experience: string;
  };
}
