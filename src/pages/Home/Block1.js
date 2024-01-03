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
				<div className = 'img-after mt150'>
					<p className = 'left discription '>We design your project and install it according to your imagination. We have solutions for Star Ceiling, Glossy Ceiling, Matte Ceiling, Acoustic Ceiling, Backlit Ceiling, Custom Printing, Laser Cut, Integrated Lighting, Soundproof Solutions. Let’s create your dream place together</p>
					<Link onClick = {() => dispatch({type: 'about'})} style = {{textDecoration: 'none'}} to = '/about' className = 'left link'>Our products</Link>
				</div>
			</div>
			<h2 className = 'gradient2 center'>How does it look like?</h2>
			<div  className = 'flex mt150'>
				<div className = 'bigImg'>
					<div>
						<div className = 'starCeiling commonImg'></div>
						<h3>Star ceiling</h3>
					</div>
				</div>
				<div className = 'middleImg mt150'>
					<div>
						<div className = 'matteCeiling commonImg'></div>
						<h3>Matte ceiling</h3>
					</div>
				</div>
			</div>
			<div className = 'flex mt150'>
				<div className = 'middleImg mt150'>
					<div>
						<div className = 'glossCeiling commonImg'></div>
						<h3>Gloss ceiling</h3>
					</div>
				</div>
				<div className = 'middleImg'>
					<div>
						<div className = 'backlightCeiling commonImg'></div>
						<h3>Backlight ceiling</h3>
					</div>
				</div>
				<div className = 'middleImg mt50'>
					<div>
						<div className = 'ledSolutions commonImg'></div>
						<h3>Led light solutions</h3>
					</div>
				</div>
			</div>
			<div className = 'flex mt150'>
				<div className = 'bigImg mt100'>
					<div>
						<div className = 'perforatedCelings commonImg'></div>
						<h3>Perfotated ceilings</h3>
					</div>
				</div>
				<div className = 'middleImg pb150 mb150'>
					<div>
						<div className = 'acousticFabric commonImg'></div>
						<h3>Acoustic fabric walls and ceilings</h3>
					</div>
				</div>
				<div className = 'smallImg'>
					<div>
						<div className = 'printCeilings commonImg'></div>
						<h3>Print walls and ceilings</h3>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Block_1;