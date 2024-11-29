export interface ProjectSection {
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'development' | 'uxui' | 'other';
  image?: string;
  overview: {
    brief: string;
    duration: string;
    role?: string;
    team?: string;
  };
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  sections: ProjectSection[];
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
    image: '/images/projects/portfolio.png',
    overview: {
      brief: 'The main purpose behind this project was to not only build my personal portfolio but also to learn full stack development whlie building it.',
      duration: '2 months'
    },
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      tools: ['Git', 'VS Code', 'Figma']
    },
    sections: [
      {
        title: 'Initial Mockup',
        content: 'The planning phase involved creating wireframes and deciding on the technical stack. I chose React with TypeScript for type safety and better development experience. The design was prototyped in Figma before implementation.',
        images: ['/images/projects/portfolio/wireframe1.png', '/images/projects/portfolio/wireframe2.png']
      },
      {
        title: 'Key Features',
        content: `The application follows a typical client-server architecture:
        - Frontend React application communicates with Express backend
        - REST API endpoints handle data requests
        - MongoDB stores dynamic content
        - Authentication implemented using JWT tokens`,
        images: ['/images/projects/portfolio/architecture.png']
      },
      {
        title: 'Future Improvements',
        content: `Planned enhancements include:
        • Blog section with CMS integration
        • Dark/Light theme toggle
        • Multi-language support
        • Advanced analytics integration`,
      }
    ],
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
    image: '/images/projects/nba-app.png',
    overview: {
      brief: 'iOS application providing real-time NBA statistics and game updates',
      duration: '3 months'
    },
    technologies: {
      frontend: ['Swift', 'UIKit', 'SwiftUI'],
      backend: ['Firebase'],
      tools: ['Xcode', 'CocoaPods', 'Postman']
    },
    sections: [
      {
        title: 'User requirements & System specifications',
        content: 'Created an iOS application to provide basketball fans with real-time access to NBA games, statistics, and player information.',
        images: ['/images/projects/nba-app/mockup1.png']
      },
      {
        title: 'User flow',
        content: 'The design process focused on creating an intuitive interface that allows quick access to game information while maintaining visual hierarchy.',
        images: ['/images/projects/nba-app/design1.png', '/images/projects/nba-app/design2.png']
      },
      {
        title: 'Key features',
        content: `Key technical aspects include:
        • Integration with NBA API for real-time data
        • Local data caching for offline access
        • Push notifications for game updates
        • Custom animations for smooth transitions`,
      },
      {
        title: 'Future Improvements',
        content: 'Implemented comprehensive unit tests and UI tests. Performed extensive performance optimization to ensure smooth operation during live games.',
      }
    ],
    links: {
      github: 'https://github.com/yourusername/nba-app'
    }
  }
];