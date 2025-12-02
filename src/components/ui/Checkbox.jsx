export const Checkbox = () => {
	return (
		<>
			<label htmlFor="MyCheckbox" className="checkbox">
				<input className="checkbox__input" type="checkbox" id="MyCheckbox"/>
				<div className="checkbox__body">
					<span className="checkbox__label">My Checkbox</span>
					<span className="checkbox__help">
      Here you find some useful help Text with a <a href="#" omit>Link</a>.
    </span>
				</div>
			</label>
		
		</>
	)
}