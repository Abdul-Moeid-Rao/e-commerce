const products = [
    // Page 1 Products (1-10)
    {
        id: 1,
        name: 'HP Pavilion Laptop',
        price: 899.99,
        oldPrice: 999.99,
        category: 'laptop',
        brand: 'hp',
        image: 'assets/images/hp pavilion.webp',
        rating: 4,
        description: 'Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.'
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        price: 999.99,
        oldPrice: 1099.99,
        category: 'smartphone',
        brand: 'apple',
        image: 'assets/images/iphone 13.png',
        rating: 5,
        description: 'Latest iPhone with A15 Bionic chip, Pro camera system, and Super Retina XDR display.'
    },
    {
        id: 3,
        name: 'Canon EOS R5',
        price: 3499.99,
        oldPrice: 3799.99,
        category: 'camera',
        brand: 'canon',
        image: 'assets/images/canon eos r5.png',
        rating: 4,
        description: 'Professional mirrorless camera with 45MP full-frame sensor and 8K video recording.'
    },
    {
        id: 4,
        name: 'Wireless Headphones',
        price: 199.99,
        oldPrice: 249.99,
        category: 'accessory',
        brand: 'sony',
        image: 'assets/images/wireless headphones.png',
        rating: 3,
        description: 'Premium noise-canceling wireless headphones with 30-hour battery life.'
    },
    {
        id: 5,
        name: 'Dell XPS 15',
        price: 1499.99,
        oldPrice: 1599.99,
        category: 'laptop',
        brand: 'dell',
        image: 'assets/images/Dell_XPS_15.png',
        rating: 5,
        description: 'Ultra-thin laptop with 4K InfinityEdge display and powerful performance.'
    },
    {
        id: 6,
        name: 'Samsung Galaxy S21',
        price: 799.99,
        oldPrice: 899.99,
        category: 'smartphone',
        brand: 'samsung',
        image: 'assets/images/galaxy s21.avif',
        rating: 4,
        description: 'Flagship smartphone with Dynamic AMOLED display and professional-grade camera.'
    },
    {
        id: 7,
        name: 'Sony A7 III',
        price: 1999.99,
        oldPrice: 2199.99,
        category: 'camera',
        brand: 'sony',
        image: 'assets/images/sony a7III.png',
        rating: 5,
        description: 'Full-frame mirrorless camera with advanced autofocus and 4K HDR video.'
    },
    {
        id: 8,
        name: 'Smart Watch',
        price: 249.99,
        oldPrice: 299.99,
        category: 'accessory',
        brand: 'apple',
        image: 'assets/images/smartwatch.png',
        rating: 4,
        description: 'Feature-packed smartwatch with health monitoring and cellular connectivity.'
    },
    {
        id: 9,
        name: 'Gaming ROG Strix GL502 Laptop',
        price: 899.99,
        oldPrice: 999.99,
        category: 'laptop',
        brand: 'asus',
        image: 'assets/images/ROG Strix GL502 2.png',
        rating: 4,
        description: 'High-performance gaming laptop with NVIDIA GeForce GTX graphics.'
    },
    {
        id: 10,
        name: 'Lenovo Laptop',
        price: 899.99,
        oldPrice: 999.99,
        category: 'laptop',
        brand: 'lenovo',
        image: 'assets/images/Lenovo.png',
        rating: 5,
        description: 'Business laptop with robust security features and long battery life.'
    },
    // Page 2 Products (11-20)
    {
        id: 11,
        name: 'Infinix Zero 40 4G',
        price: 499.99,
        oldPrice: 599.99,
        category: 'smartphone',
        brand: 'infinix',
        image: 'assets/images/Infinix Zero 40.jpg',
        rating: 5,
        description: 'Feature-rich smartphone with AMOLED display and fast charging.'
    },
    {
        id: 12,
        name: 'Xiaomi Redmin A3 pro',
        price: 799.99,
        oldPrice: 899.99,
        category: 'smartphone',
        brand: 'xiaomi',
        image: 'assets/images/redmi a3.jpg',
        rating: 4,
        description: 'Budget-friendly smartphone with impressive camera capabilities.'
    },
    {
        id: 13,
        name: 'Digital SLR camera',
        price: 1899.99,
        oldPrice: 2099.99,
        category: 'camera',
        brand: 'canon',
        image: 'assets/images/camera.png',
        rating: 5,
        description: 'Professional DSLR camera with high-resolution sensor and 4K video.'
    },
    {
        id: 14,
        name: 'Nikon DSLR camera',
        price: 2249.99,
        oldPrice: 2499.99,
        category: 'camera',
        brand: 'nikon',
        image: 'assets/images/Nikon D5600 DSLR Camera.png',
        rating: 4,
        description: 'Advanced DSLR with excellent low-light performance and fast autofocus.'
    },
    {
        id: 15,
        name: 'Apple Airpod 3',
        price: 199.99,
        oldPrice: 299.99,
        category: 'accessory',
        brand: 'apple',
        image: 'assets/images/apple-airpods-3.webp',
        rating: 4,
        description: 'Wireless earbuds with spatial audio and adaptive EQ for immersive sound.'
    },
    {
        id: 16,
        name: 'Field Tripod',
        price: 399.99,
        oldPrice: 499.99,
        category: 'accessory',
        brand: 'manfrotto',
        image: 'assets/images/field tripod.png',
        rating: 5,
        description: 'Professional tripod with fluid head for smooth video and photography.'
    },
    {
        id: 17,
        name: 'MacBook Pro 16"',
        price: 2399.99,
        oldPrice: 2599.99,
        category: 'laptop',
        brand: 'apple',
        image: 'assets/images/macbook-pro-16.jpg',
        rating: 5,
        description: 'Professional laptop with M1 Pro chip, 16GB RAM, and 1TB SSD storage.'
    },
    {
        id: 18,
        name: 'Samsung Galaxy Tab S8',
        price: 699.99,
        oldPrice: 799.99,
        category: 'tablet',
        brand: 'samsung',
        image: 'assets/images/galaxy-tab-s8.jpg',
        rating: 4,
        description: 'Premium Android tablet with S Pen included and powerful processor.'
    },
    {
        id: 19,
        name: 'Logitech MX Master 3',
        price: 99.99,
        oldPrice: 129.99,
        category: 'accessory',
        brand: 'logitech',
        image: 'assets/images/mx-master-3.jpg',
        rating: 5,
        description: 'Advanced wireless mouse with ergonomic design and precision scrolling.'
    },
    {
        id: 20,
        name: 'Bose QuietComfort 45',
        price: 329.99,
        oldPrice: 379.99,
        category: 'accessory',
        brand: 'bose',
        image: 'assets/images/bose-qc45.jpg',
        rating: 4,
        description: 'Premium noise-canceling headphones with exceptional sound quality.'
    },
    // Page 3 Products (21-30)
    {
        id: 21,
        name: 'ASUS ZenBook 14',
        price: 1099.99,
        oldPrice: 1199.99,
        category: 'laptop',
        brand: 'asus',
        image: 'assets/images/asus-zenbook-14.jpg',
        rating: 4,
        description: 'Ultra-slim laptop with OLED display and powerful performance.'
    },
    {
        id: 22,
        name: 'Google Pixel 7 Pro',
        price: 899.99,
        oldPrice: 999.99,
        category: 'smartphone',
        brand: 'google',
        image: 'assets/images/pixel-7-pro.jpg',
        rating: 4,
        description: 'Flagship Google phone with advanced camera and Tensor G2 chip.'
    },
    {
        id: 23,
        name: 'Fujifilm X-T5',
        price: 1699.99,
        oldPrice: 1799.99,
        category: 'camera',
        brand: 'fujifilm',
        image: 'assets/images/fujifilm-xt5.jpg',
        rating: 5,
        description: 'Mirrorless camera with 40MP sensor and advanced film simulations.'
    },
    {
        id: 24,
        name: 'Samsung T7 SSD 1TB',
        price: 109.99,
        oldPrice: 129.99,
        category: 'accessory',
        brand: 'samsung',
        image: 'assets/images/samsung-t7.jpg',
        rating: 5,
        description: 'Portable SSD with USB 3.2 Gen 2 and up to 1050MB/s transfer speeds.'
    },
    {
        id: 25,
        name: 'Microsoft Surface Pro 9',
        price: 1299.99,
        oldPrice: 1399.99,
        category: 'tablet',
        brand: 'microsoft',
        image: 'assets/images/surface-pro-9.jpg',
        rating: 4,
        description: 'Versatile 2-in-1 tablet with detachable keyboard and pen support.'
    },
    {
        id: 26,
        name: 'DJI Mini 3 Pro',
        price: 759.99,
        oldPrice: 899.99,
        category: 'drone',
        brand: 'dji',
        image: 'assets/images/dji-mini-3.jpg',
        rating: 5,
        description: 'Compact drone with 4K HDR video and advanced obstacle sensing.'
    },
    {
        id: 27,
        name: 'LG OLED C2 TV',
        price: 1999.99,
        oldPrice: 2499.99,
        category: 'tv',
        brand: 'lg',
        image: 'assets/images/lg-oled-c2.jpg',
        rating: 5,
        description: '55" 4K OLED TV with perfect blacks and infinite contrast.'
    },
    {
        id: 28,
        name: 'Razer BlackWidow V4',
        price: 169.99,
        oldPrice: 199.99,
        category: 'accessory',
        brand: 'razer',
        image: 'assets/images/razer-blackwidow.jpg',
        rating: 4,
        description: 'Mechanical gaming keyboard with Razer Green switches and RGB lighting.'
    },
    {
        id: 29,
        name: 'GoPro Hero 11 Black',
        price: 399.99,
        oldPrice: 499.99,
        category: 'camera',
        brand: 'gopro',
        image: 'assets/images/gopro-hero11.jpg',
        rating: 4,
        description: 'Action camera with 5.3K video and HyperSmooth 5.0 stabilization.'
    },
    {
        id: 30,
        name: 'Amazon Echo Dot 5th Gen',
        price: 49.99,
        oldPrice: 59.99,
        category: 'smart',
        brand: 'amazon',
        image: 'assets/images/echo-dot-5.jpg',
        rating: 4,
        description: 'Smart speaker with Alexa and improved sound quality.'
    }
];

window.products = products;

document.addEventListener('DOMContentLoaded', function () {
    // Enhanced Product Data with 30 products (3 pages worth)
    // DOM Elements
    const productGrid = document.getElementById('product-grid');
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const sortSelect = document.getElementById('sort-select');
    const priceSlider = document.getElementById('price-slider');
    const filterBtn = document.querySelector('.filter-btn');
    const resetBtn = document.querySelector('.reset-btn');
    const categoryLinks = document.querySelectorAll('.filter-list a');
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const ratingCheckboxes = document.querySelectorAll('input[name="rating"]');
    const paginationLinks = document.querySelectorAll('.pagination .page-number');
    const prevPageBtn = document.querySelector('.page-nav:first-child');
    const nextPageBtn = document.querySelector('.page-nav:last-child');

    // Current state
    let currentFilters = {
        category: 'all',
        maxPrice: 5000,
        brands: ['apple', 'samsung', 'hp', 'dell', 'sony', 'canon', 'asus', 'lenovo', 'infinix', 'xiaomi', 'nikon', 'manfrotto', 'logitech', 'bose', 'google', 'fujifilm', 'microsoft', 'dji', 'lg', 'razer', 'gopro', 'amazon'],
        minRating: 0
    };
    let currentPage = 1;
    const productsPerPage = 9;

    // Initialize the page
    function init() {
        renderProducts(getPaginatedProducts(products));
        setupEventListeners();
        updatePagination();
    }

    // Set up event listeners
    function setupEventListeners() {
        // View toggle buttons
        gridViewBtn.addEventListener('click', function () {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            productGrid.classList.remove('list-view');
        });

        listViewBtn.addEventListener('click', function () {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            productGrid.classList.add('list-view');
        });

        // Sort select
        sortSelect.addEventListener('change', function () {
            applyFilters();
        });

        // Price slider
        priceSlider.addEventListener('input', function () {
            document.querySelector('.price-values span:last-child').textContent = `$${this.value}`;
        });

        // Filter button
        filterBtn.addEventListener('click', function () {
            updateFilters();
            applyFilters();
        });

        // Reset button
        resetBtn.addEventListener('click', function () {
            resetFilters();
            applyFilters();
        });

        // Category links
        categoryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                categoryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                currentFilters.category = this.dataset.category;
                currentPage = 1; // Reset to first page when changing category
                applyFilters();
            });
        });

        // Brand checkboxes
        brandCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                updateFilters();
            });
        });

        // Rating checkboxes
        ratingCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                updateFilters();
            });
        });

        // Pagination
        paginationLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = parseInt(this.textContent);
                applyFilters();
            });
        });

        // Previous page button
        prevPageBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                applyFilters();
            }
        });

        // Next page button
        nextPageBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const totalPages = Math.ceil(getFilteredProducts().length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                applyFilters();
            }
        });
    }

    // Update filters from UI
    function updateFilters() {
        currentFilters.maxPrice = priceSlider.value;

        // Get selected brands
        currentFilters.brands = Array.from(brandCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Get minimum rating
        const checkedRatings = Array.from(ratingCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => parseInt(cb.value));

        currentFilters.minRating = checkedRatings.length > 0 ? Math.min(...checkedRatings) : 0;
    }

    // Reset all filters
    function resetFilters() {
        // Reset category
        document.querySelector('.filter-list a[data-category="all"]').click();

        // Reset price slider
        priceSlider.value = 5000;
        document.querySelector('.price-values span:last-child').textContent = '$5000';

        // Reset brand checkboxes
        brandCheckboxes.forEach(cb => cb.checked = true);

        // Reset rating checkboxes
        ratingCheckboxes.forEach(cb => cb.checked = true);

        // Reset sort select
        sortSelect.value = 'default';

        // Reset current filters
        currentFilters = {
            category: 'all',
            maxPrice: 5000,
            brands: ['apple', 'samsung', 'hp', 'dell', 'sony', 'canon', 'asus', 'lenovo', 'infinix', 'xiaomi', 'nikon', 'manfrotto', 'logitech', 'bose', 'google', 'fujifilm', 'microsoft', 'dji', 'lg', 'razer', 'gopro', 'amazon'],
            minRating: 0
        };

        // Reset to first page
        currentPage = 1;
    }

    // Get filtered products based on current filters
    function getFilteredProducts() {
        let filteredProducts = [...products];

        // Apply category filter
        if (currentFilters.category !== 'all') {
            filteredProducts = filteredProducts.filter(
                product => product.category === currentFilters.category
            );
        }

        // Apply price filter
        filteredProducts = filteredProducts.filter(
            product => product.price <= currentFilters.maxPrice
        );

        // Apply brand filter
        if (currentFilters.brands.length > 0) {
            filteredProducts = filteredProducts.filter(
                product => currentFilters.brands.includes(product.brand)
            );
        }

        // Apply rating filter
        if (currentFilters.minRating > 0) {
            filteredProducts = filteredProducts.filter(
                product => product.rating >= currentFilters.minRating
            );
        }

        // Apply sorting
        switch (sortSelect.value) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // Default sorting (by ID)
                filteredProducts.sort((a, b) => a.id - b.id);
                break;
        }

        return filteredProducts;
    }

    // Get paginated products
    function getPaginatedProducts(productsArray) {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return productsArray.slice(startIndex, endIndex);
    }

    // Apply all filters and sorting
    function applyFilters() {
        const filteredProducts = getFilteredProducts();
        const paginatedProducts = getPaginatedProducts(filteredProducts);

        renderProducts(paginatedProducts);
        updatePagination(filteredProducts.length);
    }

    // Update pagination UI
    function updatePagination(totalProducts = products.length) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const paginationContainer = document.querySelector('.pagination');

        // Clear existing page numbers (keep prev/next buttons)
        const existingPageNumbers = document.querySelectorAll('.pagination .page-number');
        existingPageNumbers.forEach(el => el.remove());

        // Add page numbers
        const prevPageBtn = document.querySelector('.page-nav:first-child');
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.className = 'page-number';
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.textContent = i;
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                applyFilters();
            });
            prevPageBtn.insertAdjacentElement('afterend', pageLink);
        }

        // Update prev/next button states
        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages);

        // Show/hide pagination if only one page
        paginationContainer.style.display = totalPages <= 1 ? 'none' : 'flex';
    }

    // Render products to the grid
    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';

        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<p class="no-results">No products match your filters. Try adjusting your criteria.</p>';
            return;
        }

        productsToRender.forEach(product => {
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

            // Calculate discount percentage
            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

            productCard.innerHTML = `
                <div class="product-badge">${discount}% OFF</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        ${stars}
                        <span class="rating-count">(${product.rating}.0)</span>
                    </div>
                    <div class="product-pricing">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                    </div>
                        <div class="product-tools">
                            <button class="tool-btn wishlist-btn" data-id="${product.id}"><i class="far fa-heart"></i></button>
                            <button class="tool-btn cart-btn" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
                            <a href="product-detail.html?id=${product.id}" class="tool-btn view-btn"><i class="fas fa-eye"></i></a>
                        </div>
                </div>
            `;

            productGrid.appendChild(productCard);
        });

        // Add event listeners to the new buttons
        addProductButtonEvents();
    }



    // Initialize the page
    init();
});
