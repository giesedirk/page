document.addEventListener('DOMContentLoaded', () => {
	const scroller = document.querySelector('.gallery-scroller')
	const slides = document.querySelectorAll('.gallery-item')
	const dotsContainer = document.querySelector('.gallery-dots')
	
	if (!scroller || !slides.length || !dotsContainer) return
	
	// 1. Dots erstellen und Klick-Handler hinzufügen
	slides.forEach((slide, index) => {
		const button = document.createElement('button')
		button.classList.add('dot-button')
		
		// Wichtig für A11y: Text, der das Ziel beschreibt
		button.textContent = `Gehe zu Bild ${index + 1}`
		button.setAttribute('aria-label', `Gehe zu Bild ${index + 1}`)
		
		// Klick-Handler: Beim Klick zum entsprechenden Slide scrollen
		button.addEventListener('click', () => {
			slide.scrollIntoView({behavior: 'smooth', block: 'nearest'})
			
			// Fokus auf das gescrollte Bild setzen (wichtig für Tastaturnutzer)
			slide.focus()
		})
		
		dotsContainer.appendChild(button)
	})
	
	const dotButtons = document.querySelectorAll('.dot-button')
	
	// 2. Intersection Observer für den aktiven Zustand
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const index = Array.from(slides).indexOf(entry.target)
			const dot = dotButtons[index]
			
			if (dot) {
				// Wenn das Element sichtbar ist (mehr als 50%)
				if (entry.isIntersecting) {
					dot.classList.add('active')
					dot.setAttribute('aria-current', 'true') // Wichtig für Screenreader
				} else {
					dot.classList.remove('active')
					dot.removeAttribute('aria-current')
				}
			}
		})
	}, {
		root: scroller,
		rootMargin: '0px',
		// Schwellwert 0.5: Triggert, wenn mehr als 50% des Slides sichtbar sind
		threshold: 0.5
	})
	
	// Beobachte jeden Slide
	slides.forEach(slide => {
		observer.observe(slide)
	})
})
