import Logo from './Logo';
import Navbar from './Navbar';
import NavbarMedia from './NavbarMedia';
import Slogan from './Slogan';

function Header() {
  return (
  	<div className = 'start'>
  		<NavbarMedia />
	    <div className = 'header'>
	        <Logo />
	        <Navbar />
	    </div>
	    <Slogan />
	</div>
  )
}

export default Header;