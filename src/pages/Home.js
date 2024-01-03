import Block1 from './Home/Block1';
import Gallery from './Home/Gallery';
import Block2 from './Home/Block2';
import Block3 from './Home/Block3';
import Slogan from './Home/Slogan'

function Home() {

	return(
		<div>
{/*			<div className = 'textme'>
				<div className = 'icons'>
					<div className = 'whatsupImg'></div>
				</div>
				<div className = 'icons'>
					<div className = 'telegramImg'></div>
				</div>
			</div>*/}
			<Slogan />
			<Block1 />
			<Gallery />
			<Block3 />
			<Block2 />
		</div>
	)
}

export default Home;