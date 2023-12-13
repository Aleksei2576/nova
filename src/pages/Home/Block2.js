import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const Block = () => {

	const dispatch = useDispatch()

	return(
		<div className = 'dis-container'>
			<div className = 'pt50'>
				<h2 className = 'pl150 gradient'>Do you have a project?</h2>
				<p className = 'pl150 discription'>Our manager will give you an answer <br/>
												   about our price, sceduale? and products
				</p>
			<div className = 'contactFormBody'>
				<div className = 'contactForm center'>
						<div className = 'contactFormTitle'>Fill the form</div>
						<div className = 'contactFormChild'>
							<div className = 'contactInfo'>
								Name
								<hr className = 'hrContact' />
							</div>
							<div className = 'contactInfo'>Phone number
								<hr className = 'hrContact' />
							</div>
							<div className = 'contactButton center'>Attach your file
							</div>
							<div className = 'contactButton center'>Send
							</div>
						</div>
				</div>
			</div>
			</div>
		 </div>
	)
}
  
export default Block;