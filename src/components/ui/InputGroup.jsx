export const InputGroup = () => {
	return (
		<>
			<div className="input-group">
				<label htmlFor="myInput" className="input-group__label">Label:</label>
				<input type="text" id="myInput" className="input-group__input"/>
				<span className="input-group__help">
    This is a help text. Could be a warning, too. For different colors you
    should use modifier classes.
  </span>
			</div>
		</>
	)
}