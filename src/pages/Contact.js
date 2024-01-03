import '../css/Contact.css';
import Block2 from './Home/Block2'

function Contact() {
	return(
		<div>
			<div className = 'about-image'>
				<div className = 'info-container'>
					<h2 className = 'slogan'>Contact</h2>
				</div>
			</div>
			<Block2 />
		 	<div className = 'dis-container'>
				<div className = 'center'>
					<p className = 'discription contact'>Please feel free to call us to discuss your 
						upcoming project! For inquiries about employment, subcontracting for us, 
						or information about our current project, please use the form below so we
						 can connect you to the best person to help you.
					</p>
				</div>
			</div>
		</div>
		)
}

export default Contact;