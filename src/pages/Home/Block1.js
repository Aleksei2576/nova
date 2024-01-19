import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import '../../css/Block1.css'


const Block_1 = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<h2 className = 'first-title gradient center'>Nova is your trustable Stretch Ceiling</h2>
			<h2 className = 'gradient center'>& Wall Systems company</h2>
			<div className = 'Dis'>
				<div className = 'img-block-1'>
				</div>
				<div className = 'img-after'>
					<p className = 'textAbout'>We design your project and install it according to your imagination. We have solutions for Star Ceiling, Glossy Ceiling, Matte Ceiling, Acoustic Ceiling, Backlit Ceiling, Custom Printing, Laser Cut, Integrated Lighting, Soundproof Solutions. Let’s create your dream place together</p>
				</div>
			</div>
			
			<h2 className = 'gradient2 center'>How does it look like?</h2>


			<div class="grid-container">
			  <div class="starCeiling grid-item">
			  		<div className = 'type'>
			  			Star ceiling
			  		</div>
			  </div>
			  <div class="matteCeiling grid-item">
			  		<div className = 'type'>
			  			Matte ceiling
			  		</div>
			  </div>
			  <div class="glossCeiling grid-item">
			  		<div className = 'type'>
			  			Gloss ceiling
			  		</div>
			  </div>
			  <div class="backlightCeiling grid-item">
			  		<div className = 'type'>
			  			backlight ceiling
			  		</div>
			  </div>
			  <div class="ledSolutions grid-item">
			  		<div className = 'type'>
			  			Led solutions
			  		</div>
			  </div>
			  <div class="perforatedCelings grid-item">
			  		<div className = 'type'>
			  			perforated ceiling
			  		</div>
			  </div>
			</div>
		</div>
		)
}

export default Block_1;
