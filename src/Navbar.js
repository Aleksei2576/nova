import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function NavBar() {

	const dispatch = useDispatch()
	const route = useSelector(state => state.route)

	useEffect(() => {
 		window.scrollTo(0, 0)
	}, [route])

	const id = 'navbarLink';
	const idActive = 'navbarLinkActive'

	return(
		<div className = 'navbar'>
			<nav className="navigation">
			    <ul className = 'nav-list'>
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
			        	Products
			        </Link>
			      </li>
{/*			      <li>
			        <Link onClick = {() => dispatch({type: 'solutions'})} 
			        		id = {route === '/solutions'? idActive: id} 
			        		to = '/solutions'>
			        	Solutions
			        </Link>
			      </li>*/}
			      <li>
			        <Link onClick = {() => dispatch({type: 'projects'})}
			        		id = {route === '/projects'? idActive: id} 
			        		to = '/projects'>
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
			</nav>
		</div>
	)
}

export default NavBar;