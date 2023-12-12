import logo from './logo.svg'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const NavbarMedia = () => {

  const dispatch = useDispatch()

  const route = useSelector(state => state.route)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  const id = 'navbarLink';
  const idActive = 'navbarLinkActive'

  return (
    <div className = 'navbar-media'>
      <img className = 'logo-media' alt = '' src = {logo} />
      <nav>
        <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id = 'menu'>
              <div className = 'menu-li'>
                <li><Link to = '/' 
                          onClick = {() => dispatch({type: 'home'})}
                          id = { route === '/'? idActive: id} >Home</Link></li>
                <li><Link to = '/about' 
                          onClick = {() => dispatch({type: 'about'})} 
                          id = { route === '/about'? idActive: id} >About</Link></li>
                <li><Link to = '/products' 
                          onClick = {() => dispatch({type: 'products'})}
                          id = { route === '/products'? idActive: id} >Products</Link></li>
                <li><Link to = '/solutions' 
                          onClick = {() => dispatch({type: 'solutions'})}
                          id = { route === '/solutions'? idActive: id} >Solutions</Link></li>
                <li><Link to = '/projects' 
                          onClick = {() => dispatch({type: 'projects'})}
                          id = { route === '/projects'? idActive: id} >Projects</Link></li>
                <li><Link to = '/contact' 
                          onClick = {() => dispatch({type: 'contact'})}
                          id = { route === '/contact'? idActive: id} >Contact</Link></li>
              </div>
          </ul>
       </div>
      </nav>
    </div>
  )
}

export default NavbarMedia;

