import React from 'react';
import Header from '../components/Home/Header';

/**
 * 
 * Eventually I want to have each section (header, main.A, main.B, and footer) into a separate component/file, so this file is so more readable.
 * I also want to implement a ripple effect animation when user scrolls into the top or bottom of page.
 */

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <Header />
      <div className="border-b border-dashed border-primary-400"></div>
      <main className="w-full px-20 bg-gradient-to-b from-primary-800 to-primary-500">
        <section id="MainA" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 p-12">
          {/* Left column */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-5">🌄 Background</h2>
            <p className="text-lg font-sans font-semibold text-primary-700 leading-relaxed mb-20">I'm from Texas but grew up in Pakistan and Taiwan. I graduated in May 2024 studying Computer Science and Economics from Wheaton College in Illinois.</p>
            <h2 className="text-3xl font-heading font-bold mb-5">🤓 Interests</h2>
            <p className="text-lg font-sans font-semibold text-primary-700 leading-relaxed">My main interests are in front-end development and product design. Currently I am learning full-stack and have interests in the cloud computing space as well.</p>
          </div>
          {/* Right column */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold pb-7">💻 Languages</h2>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex flex-col space-y-4">
                <div className="font-mono font-bold text-primary-600">
                  <div>Java</div>
                  <div>Python</div>
                  <div>Swift</div>
                  <div>JavaScript</div>
                  <div>TypeScript</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="font-mono font-bold text-primary-600">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SQL</div>
                  <div>C</div>
                  <div>Delphi</div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold pb-7 mt-10">⚙️ Tools</h2>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex flex-col space-y-4">
                <div className="font-mono font-bold text-primary-600">
                  <div>Git</div>
                  <div>Firebase</div>
                  <div>React</div>
                  <div>Node.js</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="font-mono font-bold text-primary-600">
                  <div>AWS</div>
                  <div>MongoDB</div>
                  <div>Xcode</div>
                  <div>VS Code</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Scrolling down */}
        <div id="Dashline2" className="w-full border-b border-dashed border-primary-400"></div>
        {/* Scrolling down */}
        <section>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
          <p>My Hobbies</p>
        </section>
      </main>
      {/* Scrolling down */}
      <div className="border-b border-dashed border-primary-400"></div>
      {/* Scrolling down */}
      <footer className="w-full px-20 pt-10 bg-gradient-to-b from-primary-500 to-secondary-dark">
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;


