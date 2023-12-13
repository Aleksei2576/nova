import Footer from './Footer';
import RoutesFun from './Routes';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import NavbarMedia from './NavbarMedia';
import Logo from './Logo'

const App = () => {
  	return (
      <div className = 'App'>
        <BrowserRouter>
        <NavbarMedia />
        <div className = 'header'>
            <Logo />
            <Navbar />
        </div>
    			<RoutesFun />
    			<Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
