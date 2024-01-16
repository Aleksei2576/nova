import logo from './logo.svg';
import '../../css/Logo.css'

function Logo() {
	return(
		<div className = 'logo'>
			<img className = 'logoImg' alt = '' src = {logo} />
		</div>
	)
}

export default Logo;