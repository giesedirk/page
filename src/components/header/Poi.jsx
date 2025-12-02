export const Poi = () => {
	return (
		<a className="poi" title="Facebook" href="/de/blog/" target="_blank">
			<div className="poi__image">
				<img
					src="./logo.svg" width="40"
					height="45" alt="Logo Bildmarke"/>
			</div>
			<div className="poi__content">
				<h3>Wir sind zurück!</h3>
				<p>Jetzt 10% Rabatt bei eurer <span>Direktbuchung</span></p>
			</div>
		</a>
	)
}