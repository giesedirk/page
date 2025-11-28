import {useState} from 'react'
import {Grid} from './components/grid/Grid.jsx'

function App() {
	const [count, setCount] = useState(0)
	
	return (
		<>
			<Grid/>
			<div id="main"><a href="#">Link</a></div>
			<div className="grid">
				
				<div className="grid__cell--1">
					<div className="grid__headlines">
						<h3 className="mosaic__title"><span
							className="mosaic__pretitle">Tanneck&nbsp;</span><span
							className="mosaic__subtitle"> Auf einen blick</span></h3>
					</div>
					<img className="grid__cell__img" src="/bild1.png" alt="bild" width={680} height={620}/>
				</div>
				<div className="grid__cell--2">
					<img className="grid__cell__img" src="/bild2.png" alt="bild" width={320} height={280}/>
				</div>
				<div className="grid__cell--3">
					<img className="grid__cell__img" src="/bild6.png" alt="bild" width={320} height={340}/>
				</div>
				<div className="grid__cell--4">
					<img className="grid__cell__img" src="/bild3.png" alt="bild" width={320} height={440}/>
				</div>
				<div className="grid__cell--5">
					<img className="grid__cell__img" src="/bild5.png" alt="bild" width={320} height={280}/>
				</div>
			</div>
		</>
	)
}

export default App
