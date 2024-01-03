import facebook from '../imagesHome/social-media/facebook.png';
import instagram from '../imagesHome/social-media/instagram.png';
import youtube from '../imagesHome/social-media/youtube.png';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Footer = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'footer'>
			<div className = 'phone'>
				+1 (647) 829 02 10 <br/>
				+1 (647) 829 02 10 <br/>
				INFO@NOVASTRETCHCEILINGS.COM
			</div>
			<div className = 'media'>
				<a target = '_blank' rel="noreferrer" href = 'https://www.facebook.com/avstyledesign'><img className = 'media-icon' alt = '' src = {facebook}/></a>
				<a target = '_blank' rel="noreferrer" href = 'https://www.instagram.com/avstyledesign'><img className = 'media-icon' alt = '' src = {instagram}/></a>
{/*				<a target = '_blank' rel="noreferrer" href = 'https://twitter.com/avstylescs'><img className = 'media-icon' alt = '' src = {twitter}/></a>
*/}				<a target = '_blank' rel="noreferrer" href = 'https://www.youtube.com/channel/UCecXFqOAzXJcLs48aR3JHHg'><img className = 'media-icon' alt = '' src = {youtube}/></a>
			</div>
		 	<div className = 'privacy'>
		 		<ul>
		 	{/*		<li>
		 				<Link className = 'list-footer' onClick = {() => dispatch({type: 'contact'})} 			        		
			        		to = '/contact'>
			        		Contact
			        	</Link>
			        </li>*/}
		 			<li >
		 					<Link className = 'list-footer' onClick = {() => dispatch({type: 'contact'})} 				        		
			        		to = '/contact'>
			        		Privacy policy		
			        	</Link>
			        </li>
		 		</ul>
		 	</div>
		 	<div className = 'rights'>
		 		©2024 Nova Stretch Ceilings. All Rights Reserved
		 	</div>
		 </div>
	)
}
  
export default Footer;