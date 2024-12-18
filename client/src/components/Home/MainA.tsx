import React from 'react';

const MainA: React.FC = () => {
  return (
    <section id="MainA" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 pt-16 pb-12 px-20">
      {/* Left column */}
      <div className="p-7 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-heading font-bold mb-5">🌄 Background</h2>
        <p className="text-lg font-sans font-semibold text-primary-700 leading-relaxed mb-20">
          I was born in Texas and grew up in Pakistan and Taiwan. I graduated in May 2024 studying Computer Science and Economics from Wheaton College in Illinois.
        </p>
        <h2 className="text-3xl font-heading font-bold mb-5">🤓 Interests</h2>
        <p className="text-lg font-sans font-semibold text-primary-700 leading-relaxed">
          My main interests are in front-end development and product design. Currently I am learning product design.
        </p>
      </div>
      {/* Right column */}
      <div className="flex flex-col p-7 bg-white rounded-lg shadow-lg">
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
  );
};

export default MainA;


