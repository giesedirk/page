export const Grid = () => {
	
	const gridItems = []
	
	const Image = ({...props}) => {
		console.log(props)
		//width: The desired width of the image
		//height: The desired height of the image
		//image:Get a specific image
		//id:Set a specific id
		//classes:Add custom classes to the image
		//const Endpoint = `https://picsum.photos/id/${image}/${width}/${height}`
		//return <img src={Endpoint} alt="bild" className={classes}/>
	}
	
	return (
		<>
			<div className="grid">
				<Image width={320} height={280} image={1}/>
			</div>
		</>
	)
}