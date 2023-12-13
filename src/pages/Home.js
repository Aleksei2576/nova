import Block1 from './Home/Block1';
import Gallery from './Home/Gallery';
import Block2 from './Home/Block2';
import Contact from './Home/Contact';
import Slogan from '../Slogan'

function Home() {

	return(
		<div>
			<Slogan />
			<Block1 />
			<Gallery />
			<Block2 />
			{/*<Contact />*/}
		</div>
	)
}

export default Home;