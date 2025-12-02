import {gridCellsGorfion} from '../../constants/'
import {Image} from '../ui/Image.jsx'
import './grid.css'

export const GridGorfion = () => {
	const baseClass = 'mosaic-gorfion'
	const Image = ({...props}) => {
		const {image, width, height, classes = 'grid__img'} = props
		const Endpoint = `https://picsum.photos/id/${image}/${width}/${height}`
		return <img src={Endpoint} alt="bild" className={classes}/>
	}
	
	return (
		<>
			<div className={baseClass}>
				<div className={`${baseClass}__grid`}>
					{
						gridCellsGorfion.map((cell, idx) => {
							
							return (
								<div className={`${baseClass}__item ${baseClass}__item--${idx + 1}`} key={idx}>
									<div className="mosaic__content">
										{/*
										<div className="mosaic__headlines"><h3 className="mosaic__title"><span
											className="mosaic__pretitle">Tanneck&nbsp;</span><span
											className="mosaic__subtitle"> Auf einen blick</span></h3></div>*/}
										<div className="mosaic__image">
											<Image
												width={cell.width}
												height={cell.height}
												image={cell.image}
											/>
										</div>
										<div className="mosaic__text">
											<h3>{cell.title}</h3>
										</div>
									</div>
								
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}