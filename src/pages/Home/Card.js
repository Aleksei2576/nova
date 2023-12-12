const Card = ({text, name, img}) => {
	return(
		<div className = 'card-body'>
			<div className='card'>
			    <div className = 'img'>
	                <img alt = '' className = 'client' src = {img} />
	            </div>
	            <p style = {{padding: 20, marginTop: 10, fontWeight: 400}} >{text}</p>
	            <p style = {{textAlign: 'center', padding: 5}}>{name}</p> 
		  	</div>
		 </div>
	)
}
  
export default Card;