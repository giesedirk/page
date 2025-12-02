import {gridCells} from '../../constants/index.js'
import {Image} from '../ui/Image.jsx'
import './grid.css'

export const Grid = () => {
	const baseClass = 'mosaic'
	
	return (
		<>
			<div className={baseClass}>
				<div className={`${baseClass}__grid`}>
					{
						gridCells.map((cell, idx) => {
							
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