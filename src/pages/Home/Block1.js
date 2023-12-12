import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const Block_1 = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<div className = 'Dis'>
				<h2 className = 'gradient'>Nova is your trustable Stretch Ceiling & Wall Systems company</h2>
				<p className = 'discription'>We design your project and install it according to your imagination. We have solutions for Star Ceiling, Glossy Ceiling, Matte Ceiling, Acoustic Ceiling, Backlit Ceiling, Custom Printing, Laser Cut, Integrated Lighting, Soundproof Solutions. Let’s create your dream place together</p>
				<Link onClick = {() => dispatch({type: 'about'})} style = {{textDecoration: 'none'}} to = '/about' className = 'link'>Read our story</Link>
			</div>
		</div>
		)
}

export default Block_1;