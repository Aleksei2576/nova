import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const Block_1 = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<h2 className = 'pt50 pl150 left gradient '>Nova is your trustable Stretch Ceiling</h2>
			<h2 className = 'pr150 right gradient '>& Wall Systems company</h2>
			<div className = 'Dis'>
				<div className = 'img-block-1'>
				</div>
				<div className = 'img-after'>
					<p className = 'left discription '>We design your project and install it according to your imagination. We have solutions for Star Ceiling, Glossy Ceiling, Matte Ceiling, Acoustic Ceiling, Backlit Ceiling, Custom Printing, Laser Cut, Integrated Lighting, Soundproof Solutions. Let’s create your dream place together</p>
					<Link onClick = {() => dispatch({type: 'about'})} style = {{textDecoration: 'none'}} to = '/about' className = 'left link'>Our products</Link>
				</div>
			</div>
		</div>
		)
}

export default Block_1;