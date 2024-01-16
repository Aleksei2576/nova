import '../../css/Slogan.css';

function Slogan({scollToRef}) {
	
	function scrollTo(ref) {
	    if (!ref.current) return;
	    ref.current.scrollIntoView({ behavior: "smooth" });
	  }

	return(
		<div className = 'start'>
			<div>
				<div className = 'slogan'>
					<div>
						We create ceilings for people
						who value quality and design
					</div>
				</div>
				<div onClick={() => scrollTo(scollToRef)}
					 className = 'btn-slogan-body'>
					<div className = 'btn-slogan'>You have a project?</div>
				</div>
			</div>
		</div>
	)
}

export default Slogan;