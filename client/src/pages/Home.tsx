import React from 'react';
import IntroDisplay from '../components/IntroDisplay';
import Test from '../pages/Test';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <header className="h-[80vh] py-20 bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 space-y-8">
          {/* Left column */}
          <div>
            <h1 className="text-5xl font-heading font-bold mb-8">Hi, I'm Ray</h1>
            <p className="text-2xl font-sans text-primary-200 mb-1">I'm a Full Stack Developer </p>
            <p className="text-2xl font-sans text-primary-200 mb-20">based in Texas.</p>
            <IntroDisplay />
          </div>
          {/* Right column */}
          <div className="flex flex-col justify-center items-center">
            <img 
              src={require('../img/pp.JPG')} 
              alt="Profile Picture" 
              className="w-60 h-60 rounded-full object-cover"
            />
            <p className="text-2xl font-sans text-primary-300 mt-8">Welcome to my portfolio!</p>
          </div>
        </div>
      </header>
      {/* Scrolling down */}
      <main className="container mx-auto px-4 py-8 mt-5">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold">Background</h2>
            <p className="text-xl font-sans text-primary-500">My background.</p>
            <h2 className="text-3xl font-heading font-bold">Interests</h2>
            <p className="text-xl font-sans text-primary-500">Full-Stack, Front End, UX/UI.</p>
          </div>
          {/* Right column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-heading font-bold pb-5">💻 Languages</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <div className="font-mono text-primary-600">
                  <div>Java</div>
                  <div>Python</div>
                  <div>Swift</div>
                  <div>JavaScript</div>
                  <div>TypeScript</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="font-mono text-primary-600">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SQL</div>
                  <div>C</div>
                  <div>Delphi</div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold pb-5 mt-8">⚙️ Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <div className="font-mono text-primary-600">
                  <div>Git</div>
                  <div>Firebase</div>
                  <div>React</div>
                  <div>Node.js</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="font-mono text-primary-600">
                  <div>AWS</div>
                  <div>MongoDB</div>
                  <div>Xcode</div>
                  <div>VS Code</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

