import Footer from './pages/Home//Footer';
import RoutesFun from './Routes';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './pages/Home//Navbar';
import Logo from './pages/Home//Logo'

const App = () => {
  	return (
      <div className = 'App'>
        <BrowserRouter>
            <Logo />
            <Navbar />
    		<RoutesFun />
    		<Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
