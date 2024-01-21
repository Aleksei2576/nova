import {useState} from 'react';
import '../../css/Block2.css'


const Block = () => {

	const [name, setName] = useState(null)
	const [phone, setPhone] = useState(null)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	const onSubmit = () => {
		setLoading(true)
		fetch('http://localhost:3334/send-email', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'},
			body: JSON.stringify({
				name: name,
				phone: phone
			})
		})
		.then(response => response.json())
		.then(() => {
			setSuccess(true)
			setLoading(false)
		})
		.catch(error => console.error('Error: ', error))
	}

	const nameHandler = (e) => {
		setName(e.target.value)
	}

	const phoneHandler = (e) => {
		setPhone(e.target.value)
	}

	return(
		<div className = 'dis-container'>
			<div>
				<div className = 'have'>
					<h2 className = 'gradient2'>Do you have a project?</h2>
					<p className = 'discription'>Our manager will give you an answer <br/>
													   about our price, scedule and products
					</p>
				</div>

			<div className = 'contactFormBody'>
				<div className = 'contactForm'>
					{!success?
					<div className = 'contactForm'>
						<div className = 'contactFormTitle'>Fill the form</div>
						<div className = 'contactFormChild'>
							<div>
								<div className = 'center'>
									<input className = 'contactInfo'
										   placeholder = 'Name'
										   name = 'name'
										   type = 'text' 
										   onChange = {(e) => nameHandler(e)}/>
								</div>
								<hr className = 'hrContact' />
							</div>
							<div>
								<div className = 'center'>
									<input className = 'contactInfo'
										   placeholder = 'Phone number'
										   name = 'phone'
										   type = 'text'
										   onChange = {(e) => phoneHandler(e)}/>
								</div>
								<hr className = 'hrContact' />
							</div>
							<div className = 'contactButton center'>Attach your file
							</div>
							<div  onClick = {() => onSubmit()} className = 'contactButton center'>{loading? 'Sending...': 'Submit' }
							</div>
						</div>
					</div>	
					: <div className = 'successTitle'>Thank you! Our manager will contact you soon!</div>
					}	
				</div>
			</div>
			</div>
		 </div>
	)
}
  
export default Block;