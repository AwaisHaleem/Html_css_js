// Interactive filter functionality for project categories
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state across buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter project cards with fade transition
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
});