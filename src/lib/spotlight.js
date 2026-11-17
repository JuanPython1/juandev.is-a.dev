export function initSpotlight() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    document.addEventListener('pointermove', (event) => {
        const card = event.target.closest?.('.spotlight');
        if (!card) return;

        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    }, { passive: true });
}
