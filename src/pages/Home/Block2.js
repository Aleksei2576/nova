import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const Block = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<div className = 'Dis'>
				<h2 className = 'gradient'>Why work with us?</h2>
				<p className = 'discription'>When you work with Nova the only boundary is your imagination. That’s because our highly skilled team uses advanced techniques, technology and materials. Together these open a world of unlimited creative possibilities, including custom printed scenes, 3D effects, high-gloss finishes, 3D shaped panels, stretchable “sail” membranes and night-time vistas created with integrated lighting such as LED strips and fiber optic light systems for a breathtaking “starry sky” effect.
				</p>
				<Link onClick = {() => dispatch({type: 'projects'})} to = '/projects' className = 'link'>See Our Latest Projects</Link>
			</div>
		 </div>
	)
}
  
export default Block;