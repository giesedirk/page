import {useEffect, useRef, useState} from 'react'
import {Image} from '../ui/Image.jsx'
import './scrollsnap.css'

export const ScrollSnap = () => {
    const block = 'scrollsnap'

    const scrollerRef = useRef(null)
    const itemRefs = useRef([])
    const [activeIndex, setActiveIndex] = useState(0)
    const slidesCount = 5
    // Drag state refs (not causing re-renders)
    const isDraggingRef = useRef(false)
    const startXRef = useRef(0)
    const startScrollLeftRef = useRef(0)
    // no pointerId storage needed; we use pointer capture only if supported

    useEffect(() => {
        const scroller = scrollerRef.current
        const slides = itemRefs.current.filter(Boolean)
        if (!scroller || !slides.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = slides.indexOf(entry.target)
                    if (index === -1) return
                    if (entry.isIntersecting) {
                        setActiveIndex(index)
                    }
                })
            },
            {
                root: scroller,
                rootMargin: '0px',
                threshold: 0.5,
            }
        )

        slides.forEach((slide) => observer.observe(slide))

        return () => {
            observer.disconnect()
        }
    }, [])

    const scrollTo = (index) => {
        const el = itemRefs.current[index]
        if (el) {
            el.scrollIntoView({behavior: 'smooth', block: 'nearest'})
            // Fokus auf das gescrollte Bild setzen (wichtig für Tastaturnutzer)
            el.focus()
        }
    }

    // Pointer-based Drag (mouse/touch) to scroll left/right
    useEffect(() => {
        const scroller = scrollerRef.current
        if (!scroller) return

        const onPointerDown = (e) => {
            // Nur Haupttaste oder Touch/Stift
            if (e.button !== undefined && e.button !== 0) return
            isDraggingRef.current = true
            startXRef.current = e.clientX
            startScrollLeftRef.current = scroller.scrollLeft
            // Scroll-Snap während Drag deaktivieren, damit es nicht „klebt“
            scroller.style.scrollSnapType = 'none'
            if (typeof scroller.setPointerCapture === 'function') {
                scroller.setPointerCapture(e.pointerId)
            }
        }

        const onPointerMove = (e) => {
            if (!isDraggingRef.current) return
            // Verhindert Textauswahl/Bilddrag
            e.preventDefault()
            const dx = e.clientX - startXRef.current
            scroller.scrollLeft = startScrollLeftRef.current - dx
        }

        const endDragAndSnap = () => {
            if (!isDraggingRef.current) return
            isDraggingRef.current = false
            // Wieder aktivieren
            scroller.style.scrollSnapType = 'x mandatory'

            // Zum nächsten Slide einrasten
            const slides = itemRefs.current.filter(Boolean)
            if (!slides.length) return
            const slideWidth = slides[0].getBoundingClientRect().width || 1
            const rawIndex = Math.round(scroller.scrollLeft / slideWidth)
            const clamped = Math.max(0, Math.min(slides.length - 1, rawIndex))
            scrollTo(clamped)
        }

        const onPointerUp = () => endDragAndSnap()
        const onPointerCancel = () => endDragAndSnap()
        const onPointerLeave = () => endDragAndSnap()

        scroller.addEventListener('pointerdown', onPointerDown, { passive: true })
        scroller.addEventListener('pointermove', onPointerMove, { passive: false })
        scroller.addEventListener('pointerup', onPointerUp, { passive: true })
        scroller.addEventListener('pointercancel', onPointerCancel, { passive: true })
        scroller.addEventListener('pointerleave', onPointerLeave, { passive: true })

        return () => {
            scroller.removeEventListener('pointerdown', onPointerDown)
            scroller.removeEventListener('pointermove', onPointerMove)
            scroller.removeEventListener('pointerup', onPointerUp)
            scroller.removeEventListener('pointercancel', onPointerCancel)
            scroller.removeEventListener('pointerleave', onPointerLeave)
        }
    }, [])

    return (
        <>
            <div className={`${block}__container`}>
                <div
                    ref={scrollerRef}
                    className={`${block}__scroller`}
                    role="region"
                    aria-label="Bildergalerie"
                >
                    <figure
                        ref={(el) => (itemRefs.current[0] = el)}
                        className={`${block}__item`}
                        id="slide-1"
                        role="group"
                        aria-label="Bild 1 von 5: Beschreibung des Bildes"
                        tabIndex={-1}
                    >
                        <Image width="640" height="380" image="21" />
                        <figcaption>Bildunterschrift 1</figcaption>
                    </figure>

                    <figure
                        ref={(el) => (itemRefs.current[1] = el)}
                        className={`${block}__item`}
                        id="slide-2"
                        role="group"
                        aria-label="Bild 2 von 5: Beschreibung des Bildes"
                        tabIndex={-1}
                    >
                        <Image width="640" height="380" image="20" />
                        <figcaption>Bildunterschrift 2</figcaption>
                    </figure>
                    <figure
                        ref={(el) => (itemRefs.current[2] = el)}
                        className={`${block}__item`}
                        id="slide-3"
                        role="group"
                        aria-label="Bild 3 von 5: Beschreibung des Bildes"
                        tabIndex={-1}
                    >
                        <Image width="640" height="380" image="22" />
                        <figcaption>Bildunterschrift 3</figcaption>
                    </figure>
                    <figure
                        ref={(el) => (itemRefs.current[3] = el)}
                        className={`${block}__item`}
                        id="slide-4"
                        role="group"
                        aria-label="Bild 4 von 5: Beschreibung des Bildes"
                        tabIndex={-1}
                    >
                        <Image width="640" height="380" image="20" />
                        <figcaption>Bildunterschrift 4</figcaption>
                    </figure>
                    <figure
                        ref={(el) => (itemRefs.current[4] = el)}
                        className={`${block}__item`}
                        id="slide-5"
                        role="group"
                        aria-label="Bild 5 von 5: Beschreibung des Bildes"
                        tabIndex={-1}
                    >
                        <Image width="640" height="380" image="25" />
                        <figcaption>Bildunterschrift 5</figcaption>
                    </figure>
                </div>

                <nav className={`${block}__dots`} aria-label="Bildnavigation">
                    {Array.from({length: slidesCount}).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`dot-button${activeIndex === i ? ' active' : ''}`}
                            aria-label={`Gehe zu Bild ${i + 1}`}
                            aria-current={activeIndex === i ? 'true' : undefined}
                            onClick={() => scrollTo(i)}
                        >
                            Gehe zu Bild {i + 1}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    )
}