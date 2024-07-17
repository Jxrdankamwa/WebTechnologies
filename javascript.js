document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.top-content label');
    const photos = document.querySelectorAll('.photo-gallery .pic');

    labels.forEach(label => {
        label.addEventListener('click', () => {
            const filter = label.getAttribute('data-filter');
            
            photos.forEach(photo => {
                if (filter === 'all') {
                    photo.classList.remove('hidden');
                } else {
                    if (photo.classList.contains(filter)) {
                        photo.classList.remove('hidden');
                    } else {
                        photo.classList.add('hidden');
                    }
                }
            });
        });
    });
});
