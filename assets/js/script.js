// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    // Trigger search on button click or Enter key
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') handleSearch();
        if (e.key === 'Backspace' || e.key === 'Delete' || searchInput.value.trim() === '') {
            resetSearch();
        }
    });

    // Also reset search when category tab or filter changes
    document.querySelectorAll('.tab, .filter-list a, input[name="brand"], input[name="rating"]').forEach(el => {
        el.addEventListener('click', resetSearch);
        el.addEventListener('change', resetSearch);
    });

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const name = card.querySelector('.product-title').textContent.toLowerCase();
            const category = card.dataset.category?.toLowerCase();

            if (name.includes(query) || category?.includes(query)) {
                card.style.display = 'block';
                card.classList.add('highlight');
            } else {
                card.style.display = 'none';
                card.classList.remove('highlight');
            }
        });
    }

    function resetSearch() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.display = 'block';
            card.classList.remove('highlight');
        });
    }

    // Currency Selector Functionality
    const currencySelect = document.getElementById('currency-select');
    const currencyIcon = document.getElementById('currency-icon');

    currencySelect.addEventListener('change', function () {
        const selectedCurrency = this.value;
        switch (selectedCurrency) {
            case 'USD':
                currencyIcon.className = 'fas fa-dollar-sign icon';
                break;
            case 'EUR':
                currencyIcon.className = 'fas fa-euro-sign icon';
                break;
            case 'PKR':
                currencyIcon.className = 'fas fa-rupee-sign icon';
                break;
        }
    });

    // Tab Navigation for Products
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    // Product Filtering Function
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }


    // Render Products in Carousel
    const carousel = document.getElementById('carousel');
    const productsContainer = document.getElementById('productsContainer');

    function renderProducts(container, productsArray) {
        container.innerHTML = '';

        productsArray.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;

            // Create rating stars
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }


            productCard.innerHTML = `
    <div class="product-badge">Sale</div>
    <div class="product-tools">
        <button class="tool-btn wishlist-btn" data-id="${product.id}"><i class="far fa-heart"></i></button>
        <button class="tool-btn cart-btn" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
        <a href="product-detail.html?id=${product.id}" class="tool-btn view-btn"><i class="fas fa-eye"></i></a>
    </div>
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">${stars}</div>
        <div class="product-pricing">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
        </div>
    </div>
`;


            container.appendChild(productCard);
        });

        // Add event listeners to the new buttons
        addProductButtonEvents();
    }

    // Initialize products
    renderProducts(carousel, products);
    renderProducts(productsContainer, products.slice(0, 4)); // Show only 4 in top selling section

    // Carousel Navigation
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentPosition = 0;
    const productWidth = 250; // Approximate width of each product card

    // Update your carousel navigation code to this:
    prevBtn.addEventListener('click', function () {
        carousel.scrollBy({
            left: -productWidth * 2,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        carousel.scrollBy({
            left: productWidth * 2,
            behavior: 'smooth'
        });
    });
    // Countdown Timer for Deal of the Week
    function updateCountdown() {
        const now = new Date();
        const endOfWeek = new Date();

        // Set to end of week (Saturday 23:59:59)
        endOfWeek.setDate(now.getDate() + (6 - now.getDay()));
        endOfWeek.setHours(23, 59, 59, 0);

        const diff = endOfWeek - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Product Button Event Handlers
    function addProductButtonEvents() {
        const wishlistButtons = document.querySelectorAll('.wishlist-btn');
        const cartButtons = document.querySelectorAll('.cart-btn');
        const viewButtons = document.querySelectorAll('.view-btn');

        wishlistButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.className = 'fas fa-heart';
                    // In a real app, you would add to wishlist here
                } else {
                    icon.className = 'far fa-heart';
                    // In a real app, you would remove from wishlist here
                }
            });
        });

        cartButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                // In a real app, you would add to cart here
                showToast('Product added to cart!');
            });
        });

    }

    // Mobile Menu Toggle (for responsive design)
    function setupMobileMenu() {
        const menuToggle = document.createElement('div');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        const bottomNav = document.querySelector('.bottom-nav');
        document.body.insertBefore(menuToggle, bottomNav);

        menuToggle.addEventListener('click', function () {
            bottomNav.classList.toggle('active');
        });
    }

    // Check if mobile and setup menu
    if (window.innerWidth <= 768) {
        setupMobileMenu();
    }

    // Responsive adjustment on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                setupMobileMenu();
            }
        } else {
            const toggle = document.querySelector('.mobile-menu-toggle');
            const bottomNav = document.querySelector('.bottom-nav');
            if (toggle) {
                toggle.remove();
                bottomNav.classList.remove('active');
            }
        }
    });

});


// Add item ID to localStorage and update UI count
function updateLocalStorage(type, id) {
    let data = JSON.parse(localStorage.getItem(type)) || [];
    if (!data.includes(id)) {
        data.push(id);
        localStorage.setItem(type, JSON.stringify(data));
    }
    updateBadgeCounts();
}
