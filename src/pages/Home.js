import Slideshow from './Home/ImageSlider';
import Block1 from './Home/Block1';
import Gallery from './Home/Gallery';
import Block2 from './Home/Block2';
import Contact from './Home/Contact';

function Home() {

	return(
		<div>
			<Block1 />
			<Slideshow />
			<Block2 />
			<Gallery />
			<Contact />
		</div>
	)
}

export default Home;