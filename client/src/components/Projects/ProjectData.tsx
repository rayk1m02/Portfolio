export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'development' | 'uxui' | 'other';
  details: string;
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
    description: 'Personal portfolio website',
    date: 'June 2023',
    category: 'development',
    details: 'A responsive portfolio website built with modern web technologies. Features include dynamic content loading, dark mode, and interactive project showcases.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    }
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution',
    date: 'April 2023',
    category: 'development',
    details: 'A comprehensive e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourecommerce.com'
    }
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative task tracker',
    date: 'March 2023',
    category: 'development',
    details: 'A real-time task management application with team collaboration features, drag-and-drop interface, and progress tracking.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
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
    technologies: ['Markdown', 'GitBook', 'OpenAPI'],
    links: {
      github: 'https://github.com/yourusername/tech-docs'
    }
  }
];

