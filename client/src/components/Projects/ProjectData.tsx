export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'development' | 'uxui' | 'other';
  details: string;
  image?: string;
  technologies?: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Web Portfolio',
    description: 'Full Stack Webapp',
    date: 'August 2024',
    category: 'development',
    details: 'A full-stack project built with React (TypeScript) frontend and Express/MongoDB backend.',
    image: '/images/projects/portfolio.png', 
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/yourusername/portfolio'
    }
  },
  {
    id: '2',
    title: 'NBA APP',
    description: 'Realtime NBA iOS app',
    date: 'April 2024',
    category: 'development',
    details: 'Real time NBA data based on user selection of team. Integrated third party APIs and CocoaPods.',
    image: '/images/projects/portfolio.png', 
    technologies: ['Swift', 'Firebase', 'NBA-API', 'SwiftyJSON'],
    links: {
      github: 'https://github.com/yourusername/ecommerce'
    }
  },
  {
    id: '3',
    title: 'OmniFood',
    description: 'Responsive Web Design',
    date: 'May 2023',
    category: 'development',
    details: 'dynamic front-end website for Omnifood, an imaginary start-up focused on delivering healthy personalized meals to users.',
    image: '/images/projects/portfolio.png', 
    technologies: ['HTML', 'CSS', 'JavaScript', 'Design Assets', 'Media Queries'],
    links: {
      github: 'https://github.com/yourusername/taskmanager'
    }
  },
  {
    id: '4',
    title: 'Travel App Redesign',
    description: 'UX/UI case study for travel application',
    date: 'May 2023',
    category: 'uxui',
    details: 'Comprehensive redesign of a travel booking application focusing on improving user journey and booking experience. Included user research, wireframing, and high-fidelity prototypes.',
    image: '/images/projects/portfolio.png', 
    technologies: ['Figma', 'Adobe XD', 'Protopie'],
    links: {
      live: 'https://yourportfolio.com/travel-app-case-study'
    }
  },
  {
    id: '5',
    title: 'Finance Dashboard',
    description: 'Financial app interface design',
    date: 'February 2023',
    category: 'uxui',
    details: 'Design of a modern finance dashboard focusing on data visualization and accessibility. Created user flows, interaction patterns, and responsive layouts.',
    image: '/images/projects/portfolio.png', 
    technologies: ['Figma', 'Sketch', 'InVision'],
    links: {
      live: 'https://yourportfolio.com/finance-dashboard'
    }
  },
  {
    id: '6',
    title: 'Photography Portfolio',
    description: 'Nature photography collection',
    date: 'January 2023',
    category: 'other',
    details: 'A curated collection of nature and wildlife photography, featuring work from national parks and wildlife sanctuaries.',
    image: '/images/projects/portfolio.png', 
    technologies: ['Adobe Lightroom', 'Photoshop'],
    links: {
      live: 'https://yourphotos.com'
    }
  },
  {
    id: '7',
    title: 'Technical Writing',
    description: 'Developer documentation project',
    date: 'May 2023',
    category: 'other',
    details: 'Created comprehensive documentation for an open-source project, including API references, tutorials, and best practices.',
    image: '/images/projects/portfolio.png', 
    technologies: ['Markdown', 'GitBook', 'OpenAPI'],
    links: {
      github: 'https://github.com/yourusername/tech-docs'
    }
  }
];