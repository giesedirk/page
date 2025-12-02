export const Breadcrumb = () => {
	return (
		<>
			<nav className="breadcrumb" aria-label="Breadcrumb">
				<ol className="breadcrumb__list">
					<li className="breadcrumb__item"><a className="breadcrumb__link" href="#">Home</a></li>
					<li className="breadcrumb__item"><a className="breadcrumb__link" href="#">About</a></li>
					<li className="breadcrumb__item"><a className="breadcrumb__link" href="#"
					                                    aria-current="location">Vision</a></li>
				</ol>
			</nav>
		</>
	)
}