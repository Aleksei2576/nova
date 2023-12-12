import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
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
        <Route path = '/products' element={<Products/>} />
      {/*  <Route path = '/solutions' element={<Solutions/>} />*/}
        <Route path = '/projects' element={<Projects/>} />
        <Route path = '/contact' element={<Contact/>} />
        <Route path="*" element={<Home />} />
      </Routes>
		)
}

export default RoutesFun;