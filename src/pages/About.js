import '../css/About.css';
import Block2 from './Home/Block2'

function About() {
	return(
		<div>
			<div className = 'about-image'>
				<div className = 'info-container'>
					<h2 className = 'slogan'>What if you work with NOVA?</h2>
					<p className = 'steps'>5 steps to the perfect ceiling</p>
				</div>
			</div>
			<div className = 'step-body'>
				<div className = 'first-step'>
					<div className = 'step-title'>
						First step
					</div>
					<div className = 'step-dis'>
						<h2 className = 'step-title-dis gradient2'>Manager on the project</h2>
						<p>С этим человеком вы взаимодействуете от замера до сдачи объекта. 
							Он понимает желания клиентов «на словах» и переводит их в техническое задание. 
							Приезжает на объект с каталогами и образцами, обсуждает решение на месте.
						</p>
					</div>
					<div className = 'first-step-img step-img'>
					</div>
				</div>
				<div className = 'first-step'>
					<div className = 'step-title'>
						Second step
					</div>
					<div className = 'step-dis'>
						<h2 className = 'step-title-dis gradient2'>project</h2>
						<p>С этим человеком вы взаимодействуете от замера до сдачи объекта. 
							Он понимает желания клиентов «на словах» и переводит их в техническое задание. 
							Приезжает на объект с каталогами и образцами, обсуждает решение на месте.
						</p>
					</div>
					<div className = 'step-img'>
					</div>
				</div>
				<div className = 'flex second-step-img-body'>
					<div className = 'second-step-img'></div>
				</div>
				<div className = 'third-step'>
					<div className = 'third-step-title'>
						Third step
					</div>
					<div className = 'third-step-dis'>
						<h2 className = 'step-title-dis gradient'>ВТОРОЙ ВЫЕЗД МЕНЕДЖЕРА ПРОЕКТА
ЦЕЛЬ — НАМЕТИТЬ ПЛАН РАБОТ:
						</h2>
						<div className = 'goals-body'>
							<h3 className = 'gradient2'>1</h3>
							<h3 className = 'goal'>Объяснить культуру производства работ заказчику</h3>
						</div>
						<hr className = 'hr-goals'/>
						<div className = 'goals-body'>
							<h3 className = 'gradient2'>2</h3>
							<h3 className = 'goal'>Объяснить культуру производства работ заказчику</h3>
						</div>
						<hr className = 'hr-goals'/>
						<div className = 'goals-body'>
							<h3 className = 'gradient2'>3</h3>
							<h3 className = 'goal'>Объяснить культуру производства работ заказчику</h3>
						</div>
						<hr className = 'hr-goals'/>
						<div className = 'goals-body'>
							<h3 className = 'gradient2'>4</h3>
							<h3 className = 'goal'>Объяснить культуру производства работ заказчику</h3>
						</div>
						<hr className = 'hr-goals'/>
						<div className = 'goals-body'>
							<h3 className = 'gradient2'>5</h3>
							<h3 className = 'goal'>Объяснить культуру производства работ заказчику</h3>
						</div>
					</div>
				</div>
				<div className = 'fifth-step flex'>
					<div className = 'step-title'>
						Forth step
					</div>
					<div className = 'fifth-step-dis'>
						<h2 className = 'step-title-dis gradient2'>Installation</h2>
						<p>С этим человеком вы взаимодействуете от замера до сдачи объекта. 
							Он понимает желания клиентов «на словах» и переводит их в техническое задание. 
							Приезжает на объект с каталогами и образцами, обсуждает решение на месте.
						</p>
					</div>
				</div>
				<div className = 'center'>
					<div className = 'installation'></div>
				</div>
				<div className = 'fifth-step flex'>
					<div className = 'step-title'>
						Fifth step
					</div>
					<div className = 'fifth-step-dis'>
						<h2 className = 'step-title-dis gradient2'>Finish</h2>
						<p>С этим человеком вы взаимодействуете от замера до сдачи объекта. 
							Он понимает желания клиентов «на словах» и переводит их в техническое задание. 
							Приезжает на объект с каталогами и образцами, обсуждает решение на месте.
						</p>
					</div>
				</div>
				<div className = 'center'>
					<div className = 'finish'></div>
				</div>

				<Block2 />
			</div>
		</div>
		)
}

export default About;