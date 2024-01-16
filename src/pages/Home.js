import Block1 from './Home/Block1';
import Block2 from './Home/Block2';
import Block3 from './Home/Block3';
import Slogan from './Home/Slogan';
import {useRef} from 'react';

function Home() {

	const ref = useRef()

	return(
		<div>
			<Slogan scollToRef = {ref} />
			<Block1 />
			<Block3 />
			<Block2 ref={ref}/>
		</div>
	)
}

export default Home;