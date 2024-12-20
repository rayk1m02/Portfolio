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
      duration: '3 months'
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
      brief: 'iOS NBA app that provides real-time NBA statistics and game updates based on user selection of team.',
      duration: '3 months'
    },
    technologies: {
      frontend: ['Swift', 'UIKit', 'SwiftUI', 'KingFisher', 'CLTypingLabel'],
      backend: ['API-NBA by Rapid API', 'SwiftyJSON'],
      database: ['Firebase'],
      tools: ['Xcode']
    },
    sections: [
      {
        title: 'User & System Requirements',
        content: `
        User
        - Register and Login
        - Team selection
        - View team logo, conference, and current roster (name, position, jersey number)
        - View weekly games (past, current, upcoming)
        - View score or time of game based on game date
        - View all conference standings (rank, name, wins, loss, pct)
        System
        - Authenticate and store user data
        - Retrieve live NBA data through API
        - Retain selected team across tab views
        - Display NBA data accordingly
        `
      },
      {
        title: 'User Flow',
        content: 'Sign in page | Team tab | Games tab | Standings tab',
        images: ['/img/Projects/NBAPP/Signin.PNG', '/img/Projects/NBAPP/Team.PNG', '/img/Projects/NBAPP/Games.PNG', '/img/Projects/NBAPP/Standings.PNG']
      },
      {
        title: 'Future Improvements',
        content: 'Deploy to App Store',
      }
    ],
    links: {
      github: 'https://github.com/rayk1m02/NBAPP.git'
    }
  },
  {
    id: '3',
    title: 'OmniFood',
    description: 'Responsive Web Design',
    date: 'May 2023', 
    category: 'development',
    image: '/img/Projects//Omnifood/Omnifood.PNG',
    overview: {
      brief: 'Dynamic front end website for Omnifood, an imaginary start-up focused on delivering healthy personalized meals.',
      duration: '3 months'
    },
    technologies: {
      frontend: ['HTML', 'CSS', 'JavaScript']
    },
    sections: [
      {
        title: 'Website at a glance',
        content: 'Please access the website through the link at the bottom.',
        images: ['/img/Projects//Omnifood/1.PNG', '/img/Projects//Omnifood/2.PNG', '/img/Projects//Omnifood/3.PNG']
      },
      {
        title: 'Key Features',
        content: `
        - Media queries to take into consideration different device screen sizes
        - Curated design assets for a professional appeal 
        - Highly responsive user experience
        `
      }
    ],
    links: {
      live: 'https://omnifood-raykim.netlify.app'
    }
  },
];