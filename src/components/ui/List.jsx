export const List = () => {
	return (
		<>
			<ul className="list">
				<li className="list__item">one</li>
				<li className="list__item">two</li>
				<li className="list__item">
					three
					<ul className="list list--second">
						<li className="list__item list__item--second">Point 3.1</li>
						<li className="list__item list__item--second">Point 3.2</li>
						<li className="list__item list__item--second">Point 3.3</li>
					</ul>
				</li>
				<li className="list__item">four</li>
			</ul>
		</>
	)
}