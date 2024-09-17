import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className='bg-primary text-white overflow-x-hidden scroll-smooth font-poppins'>
      <Routes>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </div>
  )
}

export default App
