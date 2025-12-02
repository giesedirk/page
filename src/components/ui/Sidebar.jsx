export const Sidebar = () => {
	return (
		<>
			<div className="sidebar">
				<aside></aside>
				<div>Note: The Sidebar-Block assumes, that it contains exactly two child elements where the sidebar is
					the first and the content the second.
				</div>
			</div>
			
			<div className="sidebar sidebar--reverse">
				<aside></aside>
				<div>Note: The Sidebar-Block assumes, that it contains exactly two child elements where the sidebar is
					the first and the content the second.
				</div>
			</div>
		
		</>
	)
}