export interface HomeInterface {
  profileImage: string;
  achivements: string[];
  skills: {
    image: string;
    name: string;
  }[];
  testimonials: {
    image: string;
    name: string;
    role: string;
    testimonial: string;
  }[];
}
