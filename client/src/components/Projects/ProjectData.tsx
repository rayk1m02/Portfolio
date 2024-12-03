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
    date: 'December 2024',
    category: 'development',
    image: '/img/Projects/WebPort/WebPortfolio.PNG',
    overview: {
      brief: 'The main purpose of this project was to learn full stack development by building my personal portfolio webpage.',
      duration: '2 months'
    },
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      tools: ['Git', 'VS Code', 'Miro', 'PearAI']
    },
    sections: [
      {
        title: 'Initial Mockup',
        content: 'The project first started with hand-drawn wireframes, then protoypes on Miro to better understand the general webpage structure and flow. As I progressed, I modified certain layouts. For example, in the Experience tab, I decided to have a vertical timeline instead of horizontal as it seemed more intuitive. As for the tech stack, I had already decided on using React, TypeScript, Node.js, and MongoDB as I wanted to familarize myself with them. Click the mockups below.',
        images: ['/img/Projects/WebPort/Mockup1.PNG', '/img/Projects/WebPort/Mockup2.PNG']
      },
      {
        title: 'Key Features',
        content: `The application follows a typical client-server architecture:
        - Frontend React application communicates with Express backend
        - REST API endpoints handle data requests
        - MongoDB stores resume data`
      },
      {
        title: 'Future Improvements',
        content: `
        - Add to the Blog tab
        - Add more resume data to MongoDB. Currently only have Intro data (email, linkedin, github) stored and pulled. This is because I wanted to learn the process of fetching and displaying the data before adding everything to the database.
        `
      }
    ],
    links: {
      github: 'https://github.com/rayk1m02/Portfolio.git'
    }
  },
  {
    id: '2',
    title: 'NBA APP',
    description: 'Realtime NBA iOS app',
    date: 'April 2024',
    category: 'development',
    image: '/img/Projects//NBAPP/NBAPP.PNG',
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