import React, {useState} from 'react'
//TODO fallback
export const Image = (props) => {
	const [error, setError] = useState(false)
	const handleError = () => setError(true)
	const {image, width, height, classes = 'grid__img', ...rest} = props
	const Endpoint = `https://picsum.photos/id/${image}/${width}/${height}`
	return <img src={Endpoint} alt="bild" className={classes} {...rest}
	            onError={handleError}/>
}