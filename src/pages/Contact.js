import '../css/Contact.css';
import {useState, useEffect} from 'react'
import error from '../error.png'

function Contact() {

	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [recipient, setRecipient] = useState(null)
	const [subject, setSubject] = useState(null)
	const [message, setMessage] = useState(null)
	const [success, setSuccess] = useState(false)
	const [validForm, setValidForm] = useState(false)
	const [loading, setLoading] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [submitError, setSubmitError] = useState(false)

	useEffect(() => {
		if(emailError || !firstName || !lastName || !subject || !message)
			setValidForm(false)
		else{
			setValidForm(true)
			setSubmitError(false)
		}
	}, [emailError, firstName, lastName, subject, message])

	useEffect(() => {

	}, [loading])

	const onSubmit = () => {
		if(validForm){
			setLoading(true)
			fetch('http://localhost:3334/send-email', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					recipient: recipient,
					subject: subject,
					message: message
				})
			})
			.then(response => response.json())
			.then(() => {
				setSuccess(true)
				setLoading(false)
			})
			.catch(error => console.error('Error: ', error))}
		else setSubmitError(true)
	}

	const emailHandler = (e) => {
		setRecipient(e.target.value)
		const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError(true)
		} else {
			setEmailError(false)
		}
	}

	const firstNameHandler = (e) => {
		setFirstName(e.target.value)
	}

	const lastNameHandler = (e) => {
		setLastName(e.target.value)
	}

	const subjectHandler = (e) => {
		setSubject(e.target.value)
	}

	const messageHandler = (e) => {
		setMessage(e.target.value)
	}

	return(
		<div>
			<div className = 'about-image'>
				<div className = 'info-container'>
					<h2 className = 'info-block'>How can we help?</h2>
				</div>
			</div>
		 	<div className = 'dis-container'>
				<div className = 'Dis'>
					<h2>Contact</h2>
					<p className = 'discription'>Please feel free to call us to discuss your 
						upcoming project! For inquiries about employment, subcontracting for us, 
						or information about our current project, please use the form below so we
						 can connect you to the best person to help you.
					</p>
				</div>
			</div>
			<div className = 'contact-container'>
				<div className = 'map-container'>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23034.537731979664!2d-79.53437171360196!3d43.80777916425923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b254d970ce4a9%3A0xded7e0b9a575f296!2sAV%20Style%20-%20Stretch%20Ceiling%20Services!5e0!3m2!1sru!2sca!4v1692598581469!5m2!1sru!2sca" 
							width="80%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" 
							title = 'map' referrerPolicy="no-referrer-when-downgrade">
					</iframe>
					<div className = 'info-contact-body'>
						<div className = 'info-contact'>
							AvStyle company<br/>556 Oster Lane, Unit 1, Concord, <br/>
								Ontario L4K 2C1, Canada<br/>(647) 812-1275 <br/>1 (866) 787-5103<br/>info@avstyle.ca
						</div>	
					</div>					
				</div>
				{success === false
				?					
				<div className = 'form-container'>
					<div id = 'form'>
						{submitError && <div className = 'submit-error-small'><img alt = '' src = {error} /><p>Form submission failed</p></div>}
						<h4>Name<span className = 'name'> (required)</span></h4>
						<div className = 'inline-inputs'>
							<div className  = 'lastName-body'>
								{submitError && !firstName && <p className = 'submit-error-small'>
																	<img alt = '' src = {error} />First name is required</p>}
								<label>First name</label>
								<input onChange = {(e) => firstNameHandler(e)} 
										className = 'firstName' 
										name = 'firstName' 
										type = 'text' />
							</div>
							<div className  = 'lastName-body'>
								{submitError && !lastName &&<p className = 'submit-error-small'>
																	<img alt = '' src = {error} />Last name is required</p>}
								<label>Last name</label>
								<input onChange = {(e) => lastNameHandler(e)} 
										className = 'lastName' 
										name = 'lastName' 
										type = 'text' />
							</div>
						</div>
						{emailError && submitError && recipient && <div className = 'submit-error'><img alt = '' src = {error} /> Email Address is not valid. 
																						Email addresses should follow the format
																						 user@domain.com.</div>}
						{submitError && !recipient && <p className = 'submit-error-small'><img alt = '' src = {error} />Email is required</p>}																 
						<label>Email address<span className = 'name'> (required)</span></label>
						<input onChange = {(e) => emailHandler(e)}
								name = 'email'
								type ='text' />
						{submitError && !subject && <p className = 'submit-error-small'><img alt = '' src = {error} /> Subject is required</p>}
						<label>Subject<span className = 'name'> (required)</span></label>
						<input onChange = {(e) => subjectHandler(e)}
								name = 'subject' 
								type = 'text' />
						{submitError && !message && <p className = 'submit-error-small'><img alt = '' src = {error} /> Message is required</p>}
						<label>Message<span className = 'name'> (required)</span></label>
						<textarea onChange = {(e) => messageHandler(e)}
								  name = 'message'  />						
						<button onClick = {() => onSubmit()} 
								className="btn-lrg submit-btn">{loading? 'Sending...': 'Submit' }
						</button>
					</div>
				</div>
				:
				<div className = 'thank-you'>Thank you! We'll contact you soon!</div>
				}
			</div>
		</div>
		)
}

export default Contact;