import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import '../../css/Navbar.css'

function NavBar() {

	const dispatch = useDispatch()
	const route = useSelector(state => state.route)

	useEffect(() => {
 		window.scrollTo(0, 0)
	}, [route])

	const id = 'navbarLink';
	const idActive = 'navbarLinkActive'

	return(
		<div className="navigation">
		    <ul>
		      <li>
		      	<Link onClick = {() => dispatch({type: 'home'})} 
		      			id = {route === '/'? idActive: id} 
		      			to = '/'>
		        	Home
		        </Link>
		      </li>
		      <li>
				<Link onClick = {() => dispatch({type: 'about'})} 
						id = {route === '/about'? idActive: id} 
						to = '/about'>
					About us
			    </Link>
		      </li>
		      <li>
		        <Link onClick = {() => dispatch({type: 'products'})} 
		        		id = {route === '/products'? idActive: id} 
		        		to = '/products'>
		        	Portfolio
		        </Link>
		      </li>
		      <li>
		        <Link onClick = {() => dispatch({type: 'contact'})}
		        		id = {route === '/contact'? idActive: id} 
		        		to = '/contact'>
		        	Contact
		        </Link>
		      </li>
		    </ul>
		</div>
	)
}

export default NavBar;