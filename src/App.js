import Header from './Header';
import Footer from './Footer';
import RoutesFun from './Routes';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  	return (
      <div className = 'App'>
        <BrowserRouter>
    			<Header />
    			<RoutesFun />
    			<Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
