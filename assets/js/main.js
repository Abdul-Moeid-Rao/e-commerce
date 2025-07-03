// ===== Helper: Get Product ID from Button =====
function getProductId(button) {
    return parseInt(button.dataset.id || button.closest('.tool-btn')?.dataset.id || 0);
}

// ===== Helper: Show Toast Message =====
function showToast(message) {
    let toast = document.getElementById('toast-notification');

    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Update Badge Counts in Header =====
function updateBadgeCounts() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const wishlistCount = document.getElementById('wishlist-count');
    const cartCount = document.getElementById('cart-count');

    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    if (cartCount) cartCount.textContent = cart.length;
}

// ===== Event Delegation for Cart and Wishlist Buttons =====
document.addEventListener('click', function (e) {
    const wishlistBtn = e.target.closest('.wishlist-btn');
    const cartBtn = e.target.closest('.cart-btn');

    // === Wishlist Logic ===
    if (wishlistBtn) {
        const productId = getProductId(wishlistBtn);
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const icon = wishlistBtn.querySelector('i');

        if (wishlist.includes(productId)) {
            showToast("Product already in wishlist!");
        } else {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast("Product added to wishlist!");
        }

        updateBadgeCounts();
    }

    // === Cart Logic ===
    if (cartBtn) {
        const productId = getProductId(cartBtn);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.includes(productId)) {
            showToast("Product already in cart!");
        } else {
            cart.push(productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            showToast("Product added to cart!");
        }

        updateBadgeCounts();
    }
});

// ===== On Load: Update Count Badges =====
document.addEventListener('DOMContentLoaded', updateBadgeCounts);
