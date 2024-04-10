import './App.css';
import React, { useState, useEffect } from 'react';
import Checker from './components/pages/Checker/checker';
import Main from './components/pages/Main/main';
function App() {
  const [showMain, setShowMain] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showMain ? <Main /> : <Checker />}
    </> 
    );
}

export default App;
