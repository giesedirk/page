export const Stack = () => {
	return (
		<>
			<div className="stack">
				<div>Hinweis: Layout-Komponenten sollten beliebige Kindelemente verschachteln können. Die Komponente
					ordnet diese Kindelemente an und fügt bei Bedarf Abstände hinzu.
					Um die Elemente leichter erkennbar zu machen, können Sie ein Präfix wie z. B. l-stack verwenden.
				</div>
				<div></div>
				<div></div>
			</div>
			
			<div className="stack stack--horizontal">
				<div>Hinweis: Layout-Komponenten sollten beliebige Kindelemente verschachteln können. Die Komponente
					ordnet diese Kindelemente an und fügt bei Bedarf Abstände hinzu.
					Um die Elemente leichter erkennbar zu machen, können Sie ein Präfix wie z. B. l-stack verwenden.
				</div>
				<div></div>
				<div></div>
			</div>
		</>
	)
}