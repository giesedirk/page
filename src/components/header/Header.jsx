import {Banner} from './Banner.jsx'
import {Logo} from './Logo.jsx'
import {Poi} from './Poi.jsx'
import {Gallery} from './Gallery.jsx'

const Header = () => {
	return (
		<header id="header">
			<Banner/>
			<Logo/>
			<Gallery/>
			<Poi/>
		
		</header>
	)
}
export default Header