import '../css/Portfolio.css';
import Gallery from './Home/Gallery';

function Portfolio() {
	return(
		<div>
			<div className = 'about-image'>
				<div className = 'info-container'>
					<h2 className = 'slogan'>Portfolio</h2>
				</div>
			</div>
			<Gallery />
		</div>
		)
}

export default Portfolio;