import {gridCells} from '../../constants/index.js'
export const Grid = () => {
	const Image = ({...props}) => {
		const {image, width, height, classes = 'grid__img'} = props
		const Endpoint = `https://picsum.photos/id/${image}/${width}/${height}`
		return <img src={Endpoint} alt="bild" className={classes}/>
	}

	return (
		<>
			<div className="grid">{
				gridCells.map((cell, idx) => {
					const Klasse = `grid__cell grid__cell--${idx + 1}`
					return (
						<div className={Klasse} key={idx}>
							<Image
								width={cell.width}
								height={cell.height}
								image={cell.image}
							/>
						</div>
					)
				})
			}
			</div>
		</>
	)
}