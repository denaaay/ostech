import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';
import './global.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollThreshold = 50;

      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className='bg-primary text-white overflow-x-hidden scroll-smooth font-poppins'>
      <Routes>
        <Route path='/' element={<Landing scrolled={scrolled}/>}/>
      </Routes>
    </div>
  )
}

export default App
