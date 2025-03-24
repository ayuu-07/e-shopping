const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const listings = document.querySelectorAll('.listing');

searchInput.addEventListener('input', filterListings);
categoryFilter.addEventListener('change', filterListings);

function filterListings() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    listings.forEach(listing => {
        const listingName = listing.dataset.name.toLowerCase();
        const listingCategory = listing.dataset.category;

        const nameMatch = listingName.includes(searchTerm);
        const categoryMatch = category === '' || listingCategory === category;

        if (nameMatch && categoryMatch) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });
}
