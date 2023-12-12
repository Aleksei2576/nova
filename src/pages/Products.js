import '../css/Products.css';

function Products() {
	return(
		<div>
		 	<div className = 'products-image'>
				<div className = 'info-container'>
					<h2 className = 'info-block'>Stretch ceiling products</h2>
				</div>
			</div>
			<div className = 'dis-container'>
				<div className = 'Dis'>
					<h2>What we do</h2>
					<p className = 'discription'>
							Our capabilities include large-format printing for stretch ceilings and walls, 
							acoustic solutions, 3D shapes and effects, backlit surfaces, lighting integration
							 and more. But when you work with AV Style you don’t just get creative freedom and
							  quality craftsmanship. You get personalized design solutions that work in perfect
							   harmony with the lighting, architectural features and aesthetic of your space.
							    In other words—what you want is what we deliver
					</p>
				</div>
			</div>
			<div>
				<div className = 'products-cards'>
					<div className = 'products-card-1'>
						<div className = 'shadow-div'>
							<p className = 'products-card-text'>We use special software to render the concept into lifelike 3D, then refine the idea until you’re happy</p>
							<p className = 'products-card-title'>Design</p>
						</div>
					</div>
					<div className = 'products-card-2'>
						<div className = 'shadow-div'>
							<p className = 'products-card-text'>We provide expert advice to architects, builders, designers, and other trade professionals</p>
							<p className = 'products-card-title'>Consulting</p>
						</div>
					</div>
					<div className = 'products-card-3'>
						<div className = 'shadow-div'>
							<p className = 'products-card-text'>We handle the entire installation process, with an emphasis on quick, clean, high-quality results</p>
							<p className = 'products-card-title'>Installation / Repair</p>
						</div>
					</div>
				</div>
			</div>
			<div className = 'how-we-do-it'>
				<div className = 'steps'>
					<h2>How we do it</h2>
						<div className = 'step-block'>
							<span>Step 1: Consultation</span>
							<p>We start each project with a detailed consultation including 
								design inspiration, which helps us understand the overall effect
								 the client is after with their new ceiling or wall covering. This
								  is also when we define acoustical preferences, lighting and any
								   other functional requirements.</p>
						</div>
						<div className = 'step-block'>
							<span>STEP 2: CONCEPT DESIGN</span>
							<p>Working from photos and exact measurements of the site, we create a 3D rendering using 
							a special software. The result is almost indistinguishable from the final product, but it
							 allows us to experiment with details like transparency, colour, gloss, shape, lighting and
							  texture. Just as important, it shows exactly how the new wall or ceiling will fit into the space.</p>
						</div>
						<div className = 'step-block'>
							<span>STEP 3: PRODUCTION</span>
							<p>After the concept has been approved, we move to the production of the material. For projects
							 where clients are keen on innovative, uniquely decorative ceilings, we use the German manufactured 
							 Renolit. This is the highest quality stretch ceiling made of a durable PVC membrane that is stable,
							  flexible, and durable. Renolit offers countless possibilities in terms of design and color choices.
							   You get a superb surface quality that is flat and smooth, and with a high-gloss finish, you can even
							    achieve a mirror effect. The AVStyle production process can also include printing, perforating and
							     carving of the membrane, as well as an assortment of shapes and sizes. Watch this video to learn
							      more: <a style = {{textDecoration: 'none', color: '#d91d2b'}} 
										      rel = 'noreferrer'
										      target = '_blank' 
										      href =  'https://youtu.be/_XD45Fm58VI'> https://youtu.be/_XD45Fm58VI </a></p>
						</div>
						<div className = 'step-block'>
							<span>STEP 4: INSTALLATION</span>
							<p>We strive for quick, clean installations that are as unobtrusive as possible. Most importantly,
							 it has to be up to our high quality standards, which ensures not only a flawless finish but long-lasting
							  results. Installation areas can range from a hundred to several hundred square feet.</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Products;