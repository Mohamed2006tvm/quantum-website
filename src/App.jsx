import React, { useEffect, useState } from 'react'
import Homepage from './components/Homepage/Homepage'
import Intro from './components/Logo'



const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntro ? <Intro /> : <Homepage />}
    </div>
  );
}

export default App