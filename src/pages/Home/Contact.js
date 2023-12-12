import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Contact = () => {

    const dispatch = useDispatch()


	return(
		<div className = 'dis-container'>
			<div className = 'Dis'>
				<h2 className = 'gradient contact-h2'>Contact us</h2>
				<p className = 'discription'>We’d love to discuss your upcoming project!</p>
				<div className = 'center'>
					<Link onClick = {() => dispatch({type: 'contact'})} style = {{textDecoration: 'none'}} to = '/contact' className = 'contact-btn-body'>
						<p className = 'contact-btn'>
							Get in touch
						</p>
					</Link>
				</div>
			</div>
		 </div>
	)
}
  
export default Contact;