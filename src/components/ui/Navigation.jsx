export const Navigation = () => {
	return (
		<>
			<nav className="main-nav">
				<div className="main-nav__logo">
					<a className="main-nav__logo-link">Company Name</a>
				</div>
				<ul className="main-nav__menu">
					<li className="main-nav__menu-item">
						<a className="main-nav__menu-item-link">Products</a>
						<ul className="main-nav__sub-menu">
							<li className="main-nav__sub-menu-item">
								<a className="main-nav__sub-menu-item-link">Foo</a>
							</li>
							<li className="main-nav__sub-menu-item">
								<a className="main-nav__sub-menu-item-link">Bar</a>
							</li>
							<li className="main-nav__sub-menu-item">
								<a className="main-nav__sub-menu-item-link">Baz</a>
							</li>
						</ul>
					</li>
					<li className="main-nav__menu-item">
						<a className="main-nav__menu-item-link">Services</a>
					</li>
					<li className="main-nav__menu-item">
						<a className="main-nav__menu-item-link">About Us</a>
					</li>
				</ul>
			</nav>
		</>
	)
}