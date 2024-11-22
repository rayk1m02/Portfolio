import React, { useState, useEffect, useContext, useReducer } from 'react';
import IntroDisplay from '../components/IntroDisplay';
import Test from '../pages/Test';

const initialState = { count: 0 };
function reducer(state: { count: number; }, action: { type: any; }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="pt-10 flex justify-center items-center">
      <div className="border border-gray-500 w-60 h-15 text-center">
        <p>{state.count}</p>
        <div className="space-x-4">
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

const ThemeContext = React.createContext('light');
const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>This is the {theme} themed component.</div>
};

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + (newSeconds >= 60 ? 1 : 0);
        return {
          minutes: newMinutes,
          seconds: newSeconds % 60
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once when the component mounts
  return <p>Timer: {time.minutes}:{time.seconds.toString().padStart(2, '0')}</p>
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <header className="h-[80vh] py-20 bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 space-y-8">
          {/* Left column */}
          <div>
            <h1 className="text-4xl font-heading font-bold mb-6">Hi, I'm Ray.</h1>
            <p className="text-xl font-sans text-primary-200 mb-4">I'm a Full Stack Developer based in Texas</p>
            <p className="text-xl font-sans text-primary-200 mb-20">Thanks for visiting!</p>
          <IntroDisplay />
          </div>
          {/* Right column */}
          <div className="flex justify-center items-center">
            {/* Placehodler for profile image */}
            <div className="w-60 h-60 rounded-full bg-gray-300">
              {/* Replace with an <img> tag later */}
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Test />
        <Timer />
        <ThemedComponent />
        <Counter />
      </main>
    </div>
  );
};

export default Home;
