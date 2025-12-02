export const CardI = () => {
	return (
		<>
			
			<article className="card">
				<aside className="card__aside">
					<figure className="card__figure">
						<img src="https://satyr.io/400x200?text=card__image" alt="Dummy Image" className="card__image"/>
					</figure>
				</aside>
				<header className="card__header">
					<h2 className="card__title">Card Title</h2>
					<h3 className="card__subtitle">
						Card Subtitle
					</h3>
				</header>
				<div className="card__body">
					<p className="card__copy">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint perspiciatis
						deleniti ab possimus ut? Ducimus fugiat hic velit necessitatibus. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Repellendus sapiente harum soluta excepturi ut
						temporibus, at amet corporis id asperiores.
					</p>
				</div>
				<footer className="card__footer">
					<div className="card__actions">
						<button className="button">
							Button
						</button>
					</div>
				</footer>
			</article>
		</>
	)
}