import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function RoutesFun({changeActive}) {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [])

	return (
  		<Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/about' element={<About/>} />
        <Route path = '/products' element={<Portfolio/>} />
        <Route path = '/contact' element={<Contact/>} />
        <Route path="*" element={<Home />} />
      </Routes>
		)
}

export default RoutesFun;