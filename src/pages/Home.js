import Block1 from './Home/Block1';
import Block2 from './Home/Block2';
import Block3 from './Home/Block3';
import Slogan from './Home/Slogan';
// import { Element } from 'react-scroll'

function Home() {
	return(
		<div>
			<Slogan />
			<Block1 />
			<Block2 />
{/*			<Element id = 'contactUs' name = 'contactUs'>
				<Block2 />
			</Element>*/}
		</div>
	)
}

export default Home;
