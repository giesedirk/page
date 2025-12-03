import {Banner} from './Banner.jsx'
import {Logo} from './Logo.jsx'
import {Poi} from './Poi.jsx'
import {Gallery} from './Gallery.jsx'
import './header.css'
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