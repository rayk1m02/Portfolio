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
      {/* Scrolling down */}
      <div className="border-b border-dashed border-primary-400"></div>
      {/* Scrolling down */}
      <main className="w-full px-20 pt-12 bg-gradient-to-b from-primary-800 to-primary-500">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left column */}
          <div className="space-y-5">
            <h2 className="text-2xl font-heading font-bold">Background</h2>
            <p className="text-lg font-sans text-primary-500">I was born in Texas and raised in Pakistan and Taiwan. I graduated in May 2024 from Wheaton College in Illinois.</p>
            <h2 className="text-2xl font-heading font-bold pt-10">Interests</h2>
            <p className="text-lg font-sans text-primary-500">My main interests are in front-end development and product design. Currently I am learning full-stack and have interests in the cloud computing space as well.</p>
          </div>
          {/* Right column */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-heading font-bold pb-7">💻 Languages</h2>
            <div className="grid grid-cols-2 gap-2">
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
            <h2 className="text-2xl font-heading font-bold pb-7 mt-10">⚙️ Tools</h2>
            <div className="grid grid-cols-2 gap-2">
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
        {/* Scrolling down */}
        <div className="border-b border-dashed border-primary-400"></div>
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
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
