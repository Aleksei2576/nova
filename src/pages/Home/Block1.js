import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import '../../css/Block1.css'


const Block_1 = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<h2 className = 'first-title gradient center'>Nova is INNOVATIVE CEILING AND LIGHTING STUDIO</h2>
			<div className = 'Dis'>
				<div className = 'img-block-1'>
				</div>
				<div className = 'img-after'>
					<p className = 'textAbout'>We create new solutions for stretch ceilings and lighting</p>
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
			  			track systems
			  		</div>
			  </div>
			</div>
		</div>
		)
}

export default Block_1;
