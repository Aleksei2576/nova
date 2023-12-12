import '../css/Projects.css';

function Projects() {
	return(
		<div>
		 	<div className = 'project-image'>
				<div className = 'info-container'>
					<h2 className = 'info-block'>We take pride of our projects</h2>
				</div>
			</div>
			<div className = 'dis-container'>
				<div className = 'Dis'>
					<h2>What we do</h2>
					<p className = 'discription'>
							Delivering projects that fulfill and exceed the owners
						 expectations is a process that starts during the conceptual stage with a collaborative
						  team from design through construction. This integrated team approach puts the focus
						   of all team members specifically towards the culmination of the completed project. 
						   Check out our projects by clicking on the categories below.
					</p>
				</div>
			</div>
			<div className = 'galery-block'>
				<div className = 'img-1 img-media'>
						<p className = 'sol-title' >High gloss ceiling</p>
				</div>
				<div className = 'img-2 img-media'>
						<p className = 'sol-title' >Print ceiling</p>
				</div>
				<div className = 'img-3 img-media'>
						<p className = 'sol-title' >Laser cut ceiling</p>
				</div>
				<div className = 'img-4 img-media'>
						<p className = 'sol-title' >Starry sky ceiling</p>
				</div>
				<div className = 'img-7 img-media'>
						<p className = 'sol-title' >Soundproof ceiling</p>
				</div>
				<div className = 'img-5 img-media'>
						<p className = 'sol-title' >Backlit ceiling</p>
				</div>
				<div className = 'img-6 img-media'>
						<p className = 'sol-title' >Matte ceiling</p>
				</div>
			</div>
			<div className = 'galery-grid'>
				<div className = 'galery-solutions-1'>
					<div className = 'sol img-1'>
						<p className = 'sol-title' >High gloss ceiling</p>
					</div>
					<div className = 'sol img-2'>
						<p className = 'sol-title' >Print ceiling</p>
					</div>
					<div className = 'sol img-3'>
						<p className = 'sol-title' >Laser cut ceiling</p>
					</div>
					<div className = 'galery-solutions-2'>
						<div className = 'sol img-4'>
							<p className = 'sol-title' >Starry sky ceiling</p>
						</div>
						<div className = 'sol img-7'>
							<p className = 'sol-title' >Soundproof ceiling</p>
						</div>
					</div>
					<div className = 'sol img-5'>
						<p className = 'sol-title' >Backlit ceiling</p>
					</div>
					<div className = 'sol img-6'>
						<p className = 'sol-title' >Matte ceiling</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Projects;