/* ==========================================================================
   1. MOCK DATA (12 Restaurants with Menus)
   ========================================================================== */
const imagePlaceholders = {
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
    chinese: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop",
    healthy: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    indian: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop",
    mexican: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
    cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
    bbq: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop"
};

const mockRestaurants =[
    {
        id: "r1", name: "Burger Hub", image: imagePlaceholders.burger, cuisines: ["American", "Fast Food", "Burgers"], rating: 4.2, deliveryTime: 25, costForTwo: 400, isVeg: false, isPromoted: true, address: "Nagpur West, Nagpur",
        menu:[
            { id: "m1", category: "Burgers", name: "Classic Chicken Burger", price: 150, isVeg: false, desc: "Juicy chicken patty with fresh lettuce and our signature sauce.", image: imagePlaceholders.burger },
            { id: "m2", category: "Burgers", name: "Veggie Supreme", price: 130, isVeg: true, desc: "Crispy veg patty loaded with cheese and jalapeños.", image: imagePlaceholders.burger },
            { id: "m3", category: "Sides", name: "Peri Peri Fries", price: 90, isVeg: true, desc: "Crispy fries tossed in spicy peri peri seasoning.", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=600&auto=format&fit=crop" }
        ]
    },
    {
        id: "r2", name: "Pizza Paradise", image: imagePlaceholders.pizza, cuisines: ["Italian", "Pizza", "Beverages"], rating: 4.5, deliveryTime: 35, costForTwo: 600, isVeg: false, isPromoted: false, address: "Nagpur East, Nagpur",
        menu:[
            { id: "m4", category: "Pizzas", name: "Margherita Pizza", price: 299, isVeg: true, desc: "Classic delight with 100% real mozzarella cheese.", image: imagePlaceholders.pizza },
            { id: "m5", category: "Pizzas", name: "Pepperoni Passion", price: 450, isVeg: false, desc: "Loaded with crispy pork pepperoni and extra cheese.", image: imagePlaceholders.pizza },
            { id: "m6", category: "Beverages", name: "Cold Coffee", price: 120, isVeg: true, desc: "Thick and creamy cold coffee.", image: imagePlaceholders.cafe }
        ]
    },
    {
        id: "r3", name: "Sharmaji Sweets & Veg", image: imagePlaceholders.indian, cuisines: ["North Indian", "Sweets", "Street Food"], rating: 4.1, deliveryTime: 20, costForTwo: 250, isVeg: true, isPromoted: false, address: "Dadar, Nagpur",
        menu:[
            { id: "m7", category: "Mains", name: "Paneer Butter Masala", price: 220, isVeg: true, desc: "Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.", image: imagePlaceholders.indian },
            { id: "m8", category: "Snacks", name: "Chole Bhature", price: 150, isVeg: true, desc: "Spicy chickpea curry served with fluffy fried bread.", image: imagePlaceholders.indian },
            { id: "m9", category: "Sweets", name: "Gulab Jamun (2 pcs)", price: 60, isVeg: true, desc: "Soft, melt-in-your-mouth milk solid dumplings in rose flavored sugar syrup.", image: imagePlaceholders.dessert }
        ]
    },
    {
        id: "r4", name: "Royal Biryani", image: imagePlaceholders.biryani, cuisines:["Mughlai", "Biryani", "North Indian"], rating: 4.6, deliveryTime: 45, costForTwo: 700, isVeg: false, isPromoted: true, address: "Colaba, Nagpur",
        menu:[
            { id: "m10", category: "Biryani", name: "Chicken Dum Biryani", price: 350, isVeg: false, desc: "Slow cooked aromatic rice and chicken cooked with authentic Mughlai spices.", image: imagePlaceholders.biryani },
            { id: "m11", category: "Biryani", name: "Mutton Biryani", price: 450, isVeg: false, desc: "Tender mutton pieces marinated and cooked with basmati rice.", image: imagePlaceholders.biryani },
            { id: "m12", category: "Starters", name: "Chicken Tikka", price: 250, isVeg: false, desc: "Boneless chicken pieces marinated in yogurt and spices, roasted in tandoor.", image: imagePlaceholders.bbq }
        ]
    },
    {
        id: "r5", name: "Frosty Delights", image: imagePlaceholders.dessert, cuisines: ["Ice Cream", "Desserts", "Beverages"], rating: 4.8, deliveryTime: 15, costForTwo: 300, isVeg: true, isPromoted: false, address: "Juhu, Nagpur",
        menu:[
            { id: "m13", category: "Ice Creams", name: "Belgian Chocolate", price: 180, isVeg: true, desc: "Rich and dark belgian chocolate ice cream.", image: imagePlaceholders.dessert },
            { id: "m14", category: "Ice Creams", name: "Tender Coconut", price: 150, isVeg: true, desc: "Made with fresh coconut meat and milk.", image: imagePlaceholders.dessert }
        ]
    },
    {
        id: "r6", name: "Dragon Wok", image: imagePlaceholders.chinese, cuisines: ["Chinese", "Asian", "Thai"], rating: 3.9, deliveryTime: 40, costForTwo: 500, isVeg: false, isPromoted: false, address: "Lower Parel, Nagpur",
        menu:[
            { id: "m15", category: "Noodles", name: "Hakka Noodles", price: 190, isVeg: true, desc: "Wok tossed noodles with crunchy vegetables.", image: imagePlaceholders.chinese },
            { id: "m16", category: "Mains", name: "Chilli Chicken Gravy", price: 280, isVeg: false, desc: "Diced chicken tossed in spicy dark soya and chilli sauce.", image: imagePlaceholders.chinese }
        ]
    },
    {
        id: "r7", name: "Fresh Subs", image: imagePlaceholders.healthy, cuisines:["Healthy Food", "Salads", "Wraps"], rating: 4.3, deliveryTime: 25, costForTwo: 450, isVeg: false, isPromoted: false, address: "Mahal, Nagpur",
        menu:[
            { id: "m17", category: "Subs", name: "Roasted Chicken Sub", price: 220, isVeg: false, desc: "Freshly baked bread filled with roasted chicken breast and veggies.", image: imagePlaceholders.healthy },
            { id: "m18", category: "Salads", name: "Greek Salad", price: 180, isVeg: true, desc: "Fresh veggies, feta cheese, and olives with vinaigrette dressing.", image: imagePlaceholders.healthy }
        ]
    },
    {
        id: "r8", name: "Tea Trails", image: imagePlaceholders.cafe, cuisines: ["Beverages", "Cafe", "Snacks"], rating: 4.0, deliveryTime: 20, costForTwo: 200, isVeg: true, isPromoted: false, address: "Hingna, Nagpur",
        menu:[
            { id: "m19", category: "Tea", name: "Masala Chai", price: 80, isVeg: true, desc: "Classic Indian tea brewed with aromatic spices.", image: imagePlaceholders.cafe },
            { id: "m20", category: "Snacks", name: "Bun Maska", price: 60, isVeg: true, desc: "Freshly baked sweet bun slathered with butter.", image: imagePlaceholders.cafe }
        ]
    },
    {
        id: "r9", name: "Nature's Scoop", image: imagePlaceholders.dessert, cuisines: ["Ice Cream", "Desserts"], rating: 4.7, deliveryTime: 15, costForTwo: 250, isVeg: true, isPromoted: false, address: "Goregaon, Nagpur",
        menu:[
            { id: "m21", category: "Scoops", name: "Sitaphal Ice Cream", price: 120, isVeg: true, desc: "Made with 100% natural custard apple pulp.", image: imagePlaceholders.dessert }
        ]
    },
    {
        id: "r10", name: "Grill Masters", image: imagePlaceholders.bbq, cuisines: ["North Indian", "BBQ", "Kebab"], rating: 4.4, deliveryTime: 50, costForTwo: 900, isVeg: false, isPromoted: true, address: "BKC, Nagpur",
        menu:[
            { id: "m22", category: "Starters", name: "Mutton Seekh Kebab", price: 380, isVeg: false, desc: "Minced lamb marinated with spices and grilled on skewers.", image: imagePlaceholders.bbq },
            { id: "m23", category: "Starters", name: "Paneer Tikka", price: 280, isVeg: true, desc: "Cottage cheese cubes marinated in spices and grilled.", image: imagePlaceholders.bbq }
        ]
    },
    {
        id: "r11", name: "Mexicana Bites", image: imagePlaceholders.mexican, cuisines: ["Mexican", "Fast Food"], rating: 4.1, deliveryTime: 30, costForTwo: 550, isVeg: false, isPromoted: false, address: "Versova, Nagpur",
        menu:[
            { id: "m24", category: "Tacos", name: "Crunchy Chicken Taco", price: 150, isVeg: false, desc: "Crunchy corn shell loaded with seasoned chicken, lettuce and cheese.", image: imagePlaceholders.mexican },
            { id: "m25", category: "Burritos", name: "Veggie Bean Burrito", price: 210, isVeg: true, desc: "Soft tortilla wrapped with refried beans, rice, and salsa.", image: imagePlaceholders.mexican }
        ]
    },
    {
        id: "r12", name: "Crispy Chicken Co.", image: imagePlaceholders.burger, cuisines:["Fast Food", "American"], rating: 3.8, deliveryTime: 30, costForTwo: 450, isVeg: false, isPromoted: false, address: "Chembur, Nagpur",
        menu:[
            { id: "m26", category: "Buckets", name: "Spicy Fried Chicken (4 pcs)", price: 350, isVeg: false, desc: "Crispy, juicy, and spicy bone-in fried chicken.", image: imagePlaceholders.burger }
        ]
    }
];

const mockCategories =[
    { name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200&auto=format&fit=crop" },
    { name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop" },
    { name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" },
    { name: "Chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200&auto=format&fit=crop" },
    { name: "Desserts", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200&auto=format&fit=crop" },
    { name: "Healthy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" }
];

const mockCollections =[
    { name: "Newly Opened", places: 24, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&auto=format&fit=crop" },
    { name: "Best Pizza Places", places: 18, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop" },
    { name: "Romantic Dining", places: 12, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop" },
    { name: "Great Cafes", places: 30, image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=400&auto=format&fit=crop" }
];

const mockLocalities =[
    { name: "Nagpur West", places: 354 }, { name: "Nagpur East", places: 421 }, { name: "Hingna", places: 128 },
    { name: "Civil Lines", places: 195 }, { name: "Satara Road", places: 210 }, { name: "Mahal", places: 185 }
];


/* ==========================================================================
   2. APP STATE & DOM ELEMENTS
   ========================================================================== */
let appState = {
    cart: [],
    favorites: [],
    currentRestaurant: null,
    searchQuery: "",
    activeFilters: new Set(["all"]), // Changed to Set for multiple filters
    activeSort: "relevance",
    searchHistory: [],
    theme: 'light',
    cartNotes: {} // For item-specific notes
};

// Debounce utility for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced localStorage with validation and migration
class StorageManager {
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return defaultValue;

            const parsed = JSON.parse(item);

            // Basic validation
            if (typeof parsed === 'object' && parsed !== null) {
                return parsed;
            }
            return defaultValue;
        } catch (e) {
            console.warn(`Error reading ${key} from localStorage:`, e);
            return defaultValue;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn(`Error saving ${key} to localStorage:`, e);
            return false;
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.warn(`Error removing ${key} from localStorage:`, e);
            return false;
        }
    }
}

// Initialize app state from storage
function initializeAppState() {
    appState.cart = StorageManager.get('feasto_cart', []);
    appState.favorites = StorageManager.get('feasto_favorites', []);
    appState.searchHistory = StorageManager.get('feasto_search_history', []);
    appState.theme = StorageManager.get('feasto_theme', 'light');
    appState.cartNotes = StorageManager.get('feasto_cart_notes', {});
    appState.activeFilters = new Set(StorageManager.get('feasto_active_filters', ['all']));
    appState.activeSort = StorageManager.get('feasto_active_sort', 'relevance');
}

// DOM Elements - Views
const viewHome = document.getElementById('view-home');
const viewListing = document.getElementById('view-listing');
const viewDetails = document.getElementById('view-details');

// DOM Elements - Nav & Search
const navLogo = document.getElementById('nav-logo');
const navSearchContainer = document.getElementById('nav-search-container');
const navSearchInput = document.getElementById('nav-search-input');
const heroSearchInput = document.getElementById('hero-search-input');

// DOM Elements - Grids & Containers
const categoriesGrid = document.getElementById('categories-grid');
const collectionsGrid = document.getElementById('collections-grid');
const featuredRestaurantsGrid = document.getElementById('featured-restaurants-grid');
const localitiesGrid = document.getElementById('localities-grid');
const listingGrid = document.getElementById('listing-grid');

// DOM Elements - Details Page
const detailName = document.getElementById('detail-name');
const detailCuisine = document.getElementById('detail-cuisine');
const detailAddress = document.getElementById('detail-address');
const detailRating = document.getElementById('detail-rating');
const restaurantBanner = document.getElementById('restaurant-banner');
const menuCategories = document.getElementById('menu-categories');
const menuItemsContainer = document.getElementById('menu-items-container');
const btnFavorite = document.getElementById('btn-favorite');
const vegOnlyToggle = document.getElementById('veg-only-toggle');

// DOM Elements - Cart
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartState = document.getElementById('empty-cart-state');
const cartFooter = document.getElementById('cart-footer');
const cartBadge = document.getElementById('cart-badge');

// Elements - Filter & Sort
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const emptySearchState = document.getElementById('empty-search-state');


/* ==========================================================================
   3. INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initializeAppState();
    initTheme();
    renderHomeData();
    updateCartUI();
    setupEventListeners();
    updateFilterUI(); // New function to update filter buttons
});

function setupEventListeners() {
    // Navigation
    navLogo.addEventListener('click', () => navigateTo('home'));

    // Enhanced Search with debouncing and history
    const debouncedSearch = debounce((query) => {
        appState.searchQuery = query.toLowerCase().trim();
        if (appState.searchQuery) {
            addToSearchHistory(appState.searchQuery);
        }
        StorageManager.set('feasto_search_history', appState.searchHistory);

        if(viewListing.classList.contains('hidden')) navigateTo('listing');
        renderListingData();
    }, 300);

    heroSearchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 0) {
            debouncedSearch(query);
        }
    });

    heroSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value.trim();
            if (query) {
                appState.searchQuery = query.toLowerCase();
                navSearchInput.value = query;
                addToSearchHistory(query);
                navigateTo('listing');
            }
        }
    });

    navSearchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 0) {
            debouncedSearch(query);
        }
    });

    navSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value.trim();
            if (query) {
                appState.searchQuery = query.toLowerCase();
                heroSearchInput.value = query;
                addToSearchHistory(query);
                if(viewListing.classList.contains('hidden')) navigateTo('listing');
                renderListingData();
            }
        }
    });

    // Enhanced Filters - Multiple selection support
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.dataset.filter;

            if (filterType === 'all') {
                // 'All' filter clears other filters
                appState.activeFilters.clear();
                appState.activeFilters.add('all');
            } else {
                // Remove 'all' if other filters are selected
                appState.activeFilters.delete('all');

                if (appState.activeFilters.has(filterType)) {
                    appState.activeFilters.delete(filterType);
                    // If no filters left, add 'all'
                    if (appState.activeFilters.size === 0) {
                        appState.activeFilters.add('all');
                    }
                } else {
                    appState.activeFilters.add(filterType);
                }
            }

            StorageManager.set('feasto_active_filters', Array.from(appState.activeFilters));
            updateFilterUI();
            renderListingData();
        });
    });

    // Enhanced Sorting
    sortSelect.addEventListener('change', (e) => {
        appState.activeSort = e.target.value;
        StorageManager.set('feasto_active_sort', appState.activeSort);
        renderListingData();
    });

    // Clear filters with enhanced functionality
    document.getElementById('clear-filters-btn').addEventListener('click', () => {
        clearAllFilters();
        showToast("Filters cleared", "fa-filter-circle-xmark");
    });

    // Cart interactions
    cartToggleBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    document.querySelector('.close-cart-link').addEventListener('click', () => {
        toggleCart();
        navigateTo('listing');
    });

    // Enhanced checkout with validation
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (validateCartForCheckout()) {
            processCheckout();
        }
    });

    // Mobile Menu
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        showToast("Mobile menu coming soon!", "fa-bars");
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const activeInput = document.activeElement;
            if (activeInput === heroSearchInput || activeInput === navSearchInput) {
                // Already focused, do nothing
            } else if (!viewHome.classList.contains('hidden')) {
                heroSearchInput.focus();
            } else {
                navSearchInput.focus();
            }
        }

        // Escape to close cart
        if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    });
}

// New utility functions for enhanced functionality
function addToSearchHistory(query) {
    // Remove if already exists
    const existingIndex = appState.searchHistory.indexOf(query);
    if (existingIndex > -1) {
        appState.searchHistory.splice(existingIndex, 1);
    }

    // Add to beginning
    appState.searchHistory.unshift(query);

    // Keep only last 10 searches
    if (appState.searchHistory.length > 10) {
        appState.searchHistory = appState.searchHistory.slice(0, 10);
    }
}

function updateFilterUI() {
    filterBtns.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (appState.activeFilters.has(filterType)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function clearAllFilters() {
    appState.searchQuery = "";
    appState.activeFilters.clear();
    appState.activeFilters.add('all');
    appState.activeSort = 'relevance';

    navSearchInput.value = "";
    heroSearchInput.value = "";
    sortSelect.value = 'relevance';

    StorageManager.set('feasto_active_filters', Array.from(appState.activeFilters));
    StorageManager.set('feasto_active_sort', appState.activeSort);

    updateFilterUI();
    renderListingData();
}

function validateCartForCheckout() {
    if (appState.cart.length === 0) {
        showToast("Your cart is empty!", "fa-exclamation-triangle", "var(--error-color)");
        return false;
    }

    const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const minOrder = 150; // Minimum order amount

    if (subtotal < minOrder) {
        showToast(`Minimum order amount is ₹${minOrder}`, "fa-exclamation-triangle", "var(--error-color)");
        return false;
    }

    return true;
}

function processCheckout() {
    // Simulate order processing
    showToast("Processing your order...", "fa-spinner fa-spin", "var(--primary-color)");

    setTimeout(() => {
        showToast("Order placed successfully! 🎉", "fa-circle-check", "var(--success-color)");

        // Clear cart and notes
        appState.cart = [];
        appState.cartNotes = {};

        StorageManager.set('feasto_cart', appState.cart);
        StorageManager.set('feasto_cart_notes', appState.cartNotes);

        updateCartUI();
        toggleCart();

        // Optional: Navigate to order tracking or home
        setTimeout(() => {
            navigateTo('home');
        }, 2000);
    }, 2000);
}


/* ==========================================================================
   4. VIEW MANAGEMENT (SPA Logic)
   ========================================================================== */
function navigateTo(view, data = null) {
    // Hide all views
    viewHome.classList.add('hidden');
    viewListing.classList.add('hidden');
    viewDetails.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view === 'home') {
        viewHome.classList.remove('hidden');
        navSearchContainer.classList.add('hidden');
        appState.searchQuery = "";
        navSearchInput.value = "";
        heroSearchInput.value = "";
    } 
    else if (view === 'listing') {
        viewListing.classList.remove('hidden');
        navSearchContainer.classList.remove('hidden');
        renderListingData();
    } 
    else if (view === 'details') {
        viewDetails.classList.remove('hidden');
        navSearchContainer.classList.remove('hidden');
        if (data && data.restaurantId) {
            renderDetailsData(data.restaurantId);
        }
    }
}


/* ==========================================================================
   5. RENDER FUNCTIONS
   ========================================================================== */

// --- HOME PAGE ---
function renderHomeData() {
    // Render Categories
    categoriesGrid.innerHTML = mockCategories.map(cat => `
        <div class="category-card" onclick="appState.searchQuery='${cat.name}'; navigateTo('listing')">
            <div class="category-img-wrapper"><img src="${cat.image}" alt="${cat.name}" loading="lazy"></div>
            <h3>${cat.name}</h3>
        </div>
    `).join('');

    // Render Collections
    collectionsGrid.innerHTML = mockCollections.map(col => `
        <div class="collection-card">
            <img src="${col.image}" alt="${col.name}" loading="lazy">
            <div class="collection-overlay">
                <h4>${col.name}</h4>
                <p>${col.places} Places <i class="fa-solid fa-caret-right"></i></p>
            </div>
        </div>
    `).join('');

    // Render Localities
    localitiesGrid.innerHTML = mockLocalities.map(loc => `
        <div class="locality-card" onclick="appState.searchQuery=''; navigateTo('listing')">
            <div class="locality-info">
                <h4>${loc.name}</h4>
                <p>${loc.places} places</p>
            </div>
            <i class="fa-solid fa-chevron-right" style="color: var(--text-light)"></i>
        </div>
    `).join('');

    // Render Featured Restaurants
    const featured = mockRestaurants.filter(r => r.isPromoted).slice(0, 6);
    renderRestaurantCards(featuredRestaurantsGrid, featured);
}

// --- LISTING PAGE ---
function renderListingData() {
    let results = [...mockRestaurants];

    // Enhanced Search with ranking
    if (appState.searchQuery) {
        results = performAdvancedSearch(results, appState.searchQuery);
        document.getElementById('listing-title').innerText = `Search results for "${appState.searchQuery}"`;
    } else {
        document.getElementById('listing-title').innerText = "Delivery Restaurants in Nagpur";
    }

    // Enhanced Multi-filter system
    results = applyFilters(results);

    // Enhanced Sorting
    results = applySorting(results);

    // Render with loading state
    showSkeletons(listingGrid, 6, 'restaurant');
    emptySearchState.classList.add('hidden');
    listingGrid.classList.remove('hidden');

    setTimeout(() => {
        if (results.length === 0) {
            listingGrid.classList.add('hidden');
            emptySearchState.classList.remove('hidden');
        } else {
            renderRestaurantCards(listingGrid, results);
        }
    }, 400); // Reduced delay for better UX
}

function performAdvancedSearch(restaurants, query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return restaurants;

    // Score-based search for better relevance
    const scoredResults = restaurants.map(restaurant => {
        let score = 0;
        const name = restaurant.name.toLowerCase();
        const cuisines = restaurant.cuisines.map(c => c.toLowerCase());
        const menuItems = restaurant.menu.map(m => m.name.toLowerCase());

        // Exact name match gets highest score
        if (name === searchTerm) score += 100;
        // Name starts with search term
        else if (name.startsWith(searchTerm)) score += 50;
        // Name contains search term
        else if (name.includes(searchTerm)) score += 25;

        // Cuisine matches
        cuisines.forEach(cuisine => {
            if (cuisine === searchTerm) score += 30;
            else if (cuisine.includes(searchTerm)) score += 15;
        });

        // Menu item matches
        menuItems.forEach(item => {
            if (item.includes(searchTerm)) score += 10;
        });

        // Boost promoted restaurants slightly
        if (restaurant.isPromoted) score += 5;

        return { restaurant, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.restaurant);

    return scoredResults;
}

function applyFilters(restaurants) {
    let filtered = [...restaurants];

    // If 'all' is selected, return all restaurants
    if (appState.activeFilters.has('all') && appState.activeFilters.size === 1) {
        return filtered;
    }

    // Apply each active filter
    if (appState.activeFilters.has('rating')) {
        filtered = filtered.filter(r => r.rating >= 4.0);
    }

    if (appState.activeFilters.has('veg')) {
        filtered = filtered.filter(r => r.isVeg);
    }

    if (appState.activeFilters.has('nonveg')) {
        filtered = filtered.filter(r => !r.isVeg);
    }

    if (appState.activeFilters.has('fast')) {
        filtered = filtered.filter(r => r.deliveryTime <= 30);
    }

    // New filters
    if (appState.activeFilters.has('promoted')) {
        filtered = filtered.filter(r => r.isPromoted);
    }

    if (appState.activeFilters.has('cheap')) {
        filtered = filtered.filter(r => r.costForTwo <= 300);
    }

    return filtered;
}

function applySorting(restaurants) {
    const sorted = [...restaurants];

    switch (appState.activeSort) {
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'time':
            return sorted.sort((a, b) => a.deliveryTime - b.deliveryTime);
        case 'cost-low':
            return sorted.sort((a, b) => a.costForTwo - b.costForTwo);
        case 'cost-high':
            return sorted.sort((a, b) => b.costForTwo - a.costForTwo);
        case 'popularity':
            // Simulate popularity based on rating and promotion
            return sorted.sort((a, b) => {
                const aScore = a.rating * 10 + (a.isPromoted ? 5 : 0);
                const bScore = b.rating * 10 + (b.isPromoted ? 5 : 0);
                return bScore - aScore;
            });
        case 'relevance':
        default:
            // For relevance, maintain search order or fallback to rating
            return appState.searchQuery ? sorted : sorted.sort((a, b) => b.rating - a.rating);
    }
}

function renderRestaurantCards(container, restaurants) {
    container.innerHTML = restaurants.map(r => `
        <div class="restaurant-card" onclick="navigateTo('details', {restaurantId: '${r.id}'})">
            <div class="restaurant-img-container">
                <img src="${r.image}" alt="${r.name}" loading="lazy">
                ${r.isPromoted ? `<span class="promoted-badge">Promoted</span>` : ''}
                <span class="time-badge">${r.deliveryTime} mins</span>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header-row">
                    <h3>${r.name}</h3>
                    <div class="rating-badge ${r.rating >= 4 ? 'green' : 'yellow'}">
                        <span>${r.rating}</span> <i class="fa-solid fa-star" style="font-size:0.7rem"></i>
                    </div>
                </div>
                <div class="restaurant-meta-row">
                    <span class="cuisine-text">${r.cuisines.join(', ')}</span>
                    <span>₹${r.costForTwo} for two</span>
                </div>
                <div class="divider"></div>
                <div class="restaurant-footer">
                    <img src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png" alt="safe" style="width:18px; height:18px">
                    <span>Follows all Max Safety measures to ensure your food is safe</span>
                </div>
            </div>
        </div>
    `).join('');
}

// --- DETAILS PAGE ---
function renderDetailsData(restaurantId) {
    const restaurant = mockRestaurants.find(r => r.id === restaurantId);
    if (!restaurant) return navigateTo('home');
    appState.currentRestaurant = restaurant;

    // Header Info
    document.getElementById('detail-breadcrumb-name').innerText = restaurant.name;
    detailName.innerText = restaurant.name;
    detailCuisine.innerText = restaurant.cuisines.join(', ');
    detailAddress.innerText = restaurant.address;
    detailRating.innerHTML = `<span>${restaurant.rating}</span> <i class="fa-solid fa-star"></i>`;

    // Banner Gallery (Duplicate image slightly to create a collage look)
    restaurantBanner.innerHTML = `
        <img src="${restaurant.image}" class="gallery-img gallery-item-1" alt="gallery">
        <img src="${restaurant.menu[0]?.image || restaurant.image}" class="gallery-img" alt="gallery">
        <img src="${restaurant.menu[1]?.image || restaurant.image}" class="gallery-img" alt="gallery">
    `;

    // Favorite Button Logic
    updateFavoriteBtn();
    btnFavorite.onclick = () => toggleFavorite(restaurant.id);

    // Group menu by categories
    const categoriesMap = {};
    restaurant.menu.forEach(item => {
        if(!categoriesMap[item.category]) categoriesMap[item.category] = [];
        categoriesMap[item.category].push(item);
    });

    // Render Sidebar Categories
    menuCategories.innerHTML = Object.keys(categoriesMap).map((cat, index) => `
        <li class="${index === 0 ? 'active' : ''}" onclick="scrollToCategory('${cat}', this)">${cat} (${categoriesMap[cat].length})</li>
    `).join('');

    // Render Menu Items
    vegOnlyToggle.checked = false;
    vegOnlyToggle.onchange = () => renderMenuItems(categoriesMap);
    renderMenuItems(categoriesMap);
}

function renderMenuItems(categoriesMap) {
    const isVegOnly = vegOnlyToggle.checked;
    
    let html = '';
    for (const[category, items] of Object.entries(categoriesMap)) {
        const filteredItems = isVegOnly ? items.filter(i => i.isVeg) : items;
        if(filteredItems.length === 0) continue;

        html += `
            <div class="menu-category-section" id="category-${category.replace(/\s+/g, '-')}">
                <h3 class="menu-category-title">${category}</h3>
                ${filteredItems.map(item => createMenuItemHTML(item)).join('')}
            </div>
        `;
    }
    
    if(!html) {
        html = `<div style="padding: 40px 0; text-align:center; color: var(--text-muted);">No items match your filter.</div>`;
    }
    
    menuItemsContainer.innerHTML = html;
}

function createMenuItemHTML(item) {
    // Check if item is in cart to show proper button
    const cartItem = appState.cart.find(c => c.itemId === item.id);
    const qty = cartItem ? cartItem.qty : 0;

    let buttonHTML = '';
    if (qty > 0) {
        buttonHTML = `
            <div class="qty-controls">
                <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                <span class="qty-count">${qty}</span>
                <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
        `;
    } else {
        buttonHTML = `<button class="add-to-cart-btn" onclick="addToCart('${item.id}')">Add</button>`;
    }

    return `
        <div class="menu-item-card">
            <div class="menu-item-info">
                <div class="${item.isVeg ? 'veg-icon' : 'nonveg-icon'}"></div>
                <h4 class="menu-item-title">${item.name}</h4>
                <div class="menu-item-price">₹${item.price}</div>
                <p class="menu-item-desc">${item.desc}</p>
            </div>
            <div class="menu-item-image-container">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${buttonHTML}
            </div>
        </div>
    `;
}

function scrollToCategory(catName, liElement) {
    const target = document.getElementById(`category-${catName.replace(/\s+/g, '-')}`);
    if(target) {
        const yOffset = -100; // Account for sticky nav
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    // Update active class
    Array.from(menuCategories.children).forEach(child => child.classList.remove('active'));
    liElement.classList.add('active');
}


/* ==========================================================================
   6. CART & LOCAL STORAGE LOGIC
   ========================================================================== */
function addToCart(itemId, quantity = 1, notes = '') {
    const r = appState.currentRestaurant;
    if (!r) return;

    const item = r.menu.find(m => m.id === itemId);
    if (!item) return;

    // Enhanced single restaurant validation with better UX
    if (appState.cart.length > 0 && appState.cart[0].restaurantId !== r.id) {
        const currentRestaurant = mockRestaurants.find(rest => rest.id === appState.cart[0].restaurantId);
        const confirmClear = confirm(
            `Your cart contains items from "${currentRestaurant?.name || 'another restaurant'}". ` +
            `Do you want to clear it and add "${item.name}" from "${r.name}"?`
        );

        if (confirmClear) {
            clearCart();
        } else {
            return;
        }
    }

    // Check if item already exists in cart
    const existingItemIndex = appState.cart.findIndex(c => c.itemId === itemId);

    if (existingItemIndex > -1) {
        // Update quantity of existing item
        appState.cart[existingItemIndex].qty += quantity;
        if (notes) {
            appState.cartNotes[itemId] = notes;
        }
    } else {
        // Add new item
        appState.cart.push({
            itemId: item.id,
            restaurantId: r.id,
            name: item.name,
            price: item.price,
            image: item.image,
            isVeg: item.isVeg,
            qty: quantity,
            addedAt: new Date().toISOString()
        });

        if (notes) {
            appState.cartNotes[itemId] = notes;
        }
    }

    saveCart();
    updateCartUI();

    const action = existingItemIndex > -1 ? 'updated in cart' : 'added to cart';
    showToast(`"${item.name}" ${action}`, "fa-cart-plus", "var(--primary-color)");

    // Re-render menu to show quantity buttons
    if (!viewDetails.classList.contains('hidden')) {
        renderMenuItemsForCurrentRestaurant();
    }
}

function updateCartQty(itemId, change) {
    const itemIndex = appState.cart.findIndex(c => c.itemId === itemId);
    if (itemIndex === -1) return;

    const item = appState.cart[itemIndex];
    const newQty = item.qty + change;

    if (newQty <= 0) {
        // Remove item from cart
        removeFromCart(itemId);
        return;
    }

    if (newQty > 99) {
        showToast("Maximum quantity reached", "fa-exclamation-triangle", "var(--warning-color)");
        return;
    }

    item.qty = newQty;
    saveCart();
    updateCartUI();

    // Re-render menu if on details page
    if (!viewDetails.classList.contains('hidden')) {
        renderMenuItemsForCurrentRestaurant();
    }
}

function removeFromCart(itemId) {
    const itemIndex = appState.cart.findIndex(c => c.itemId === itemId);
    if (itemIndex === -1) return;

    const item = appState.cart[itemIndex];
    const itemName = item.name;

    // Remove item and notes
    appState.cart.splice(itemIndex, 1);
    delete appState.cartNotes[itemId];

    saveCart();
    updateCartUI();

    showToast(`"${itemName}" removed from cart`, "fa-trash", "var(--error-color)");

    // Re-render menu if on details page
    if (!viewDetails.classList.contains('hidden')) {
        renderMenuItemsForCurrentRestaurant();
    }
}

function clearCart() {
    const itemCount = appState.cart.length;
    appState.cart = [];
    appState.cartNotes = {};

    saveCart();
    updateCartUI();

    if (itemCount > 0) {
        showToast("Cart cleared", "fa-cart-arrow-down");
    }
}

function saveCart() {
    StorageManager.set('feasto_cart', appState.cart);
    StorageManager.set('feasto_cart_notes', appState.cartNotes);
}

function renderMenuItemsForCurrentRestaurant() {
    if (!appState.currentRestaurant) return;

    const categoriesMap = {};
    appState.currentRestaurant.menu.forEach(item => {
        if (!categoriesMap[item.category]) categoriesMap[item.category] = [];
        categoriesMap[item.category].push(item);
    });
    renderMenuItems(categoriesMap);
}

function updateCartUI() {
    // Update Badge
    const totalQty = appState.cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.innerText = totalQty;
    cartBadge.style.display = totalQty > 0 ? 'flex' : 'none';

    // Render Cart Items Sidebar
    if (appState.cart.length === 0) {
        emptyCartState.classList.remove('hidden');
        cartItemsContainer.innerHTML = '';
        cartFooter.classList.add('hidden');
        return;
    }

    emptyCartState.classList.add('hidden');
    cartFooter.classList.remove('hidden');

    cartItemsContainer.innerHTML = appState.cart.map(item => {
        const notes = appState.cartNotes[item.itemId];
        const itemTotal = item.price * item.qty;

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <div style="display:flex; align-items:center; gap:6px;">
                            <div class="${item.isVeg ? 'veg-icon' : 'nonveg-icon'}" style="width:10px; height:10px;"></div>
                            <h4 class="cart-item-title">${item.name}</h4>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${item.itemId}')" title="Remove item">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div class="cart-item-price">₹${item.price}</div>

                    ${notes ? `<div class="cart-item-notes"><i class="fa-solid fa-sticky-note"></i> ${notes}</div>` : ''}

                    <div class="cart-item-actions">
                        <div class="cart-item-qty">
                            <button onclick="updateCartQty('${item.itemId}', -1)" ${item.qty <= 1 ? 'disabled' : ''}>-</button>
                            <span>${item.qty}</span>
                            <button onclick="updateCartQty('${item.itemId}', 1)" ${item.qty >= 99 ? 'disabled' : ''}>+</button>
                        </div>
                        <span class="cart-item-total">₹${itemTotal}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Calculate Totals with enhanced logic
    const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = subtotal > 500 ? 0 : 40; // Free delivery above ₹500
    const taxes = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + deliveryFee + taxes;

    // Update footer with conditional delivery fee
    cartFooter.innerHTML = `
        <div class="cart-summary">
            <div class="cart-notice">
                ${subtotal > 500 ? '<i class="fa-solid fa-truck"></i> Free delivery on orders above ₹500!' : '<i class="fa-solid fa-truck"></i> Add ₹' + (500 - subtotal) + ' more for free delivery'}
            </div>
        </div>
        <div class="bill-details">
            <div class="bill-row">
                <span>Subtotal</span>
                <span id="cart-subtotal">₹${subtotal}</span>
            </div>
            <div class="bill-row">
                <span>Delivery Fee</span>
                <span id="cart-delivery" class="${deliveryFee === 0 ? 'free-delivery' : ''}">₹${deliveryFee}</span>
            </div>
            <div class="bill-row">
                <span>Taxes & Charges</span>
                <span id="cart-taxes">₹${taxes}</span>
            </div>
            <div class="bill-divider"></div>
            <div class="bill-row total-row">
                <span>To Pay</span>
                <span id="cart-total">₹${total}</span>
            </div>
        </div>
        <button class="btn btn-primary btn-checkout" id="checkout-btn">
            Proceed to Checkout
        </button>
    `;

    // Re-attach checkout event listener
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (validateCartForCheckout()) {
            processCheckout();
        }
    });
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

// --- FAVORITES LOGIC ---
function toggleFavorite(restId) {
    const restaurant = mockRestaurants.find(r => r.id === restId);
    if (!restaurant) return;

    const isCurrentlyFav = appState.favorites.includes(restId);

    if (isCurrentlyFav) {
        // Remove from favorites
        const index = appState.favorites.indexOf(restId);
        appState.favorites.splice(index, 1);
        showToast(`"${restaurant.name}" removed from favorites`, "fa-heart-crack", "var(--text-muted)");
    } else {
        // Add to favorites
        appState.favorites.push(restId);
        showToast(`"${restaurant.name}" added to favorites`, "fa-heart", "var(--error-color)");
    }

    // Save to storage
    StorageManager.set('feasto_favorites', appState.favorites);

    // Update UI
    updateFavoriteBtn();

    // If on listing page, re-render to show favorite status
    if (!viewListing.classList.contains('hidden')) {
        renderListingData();
    }
}

function isFavorite(restId) {
    return appState.favorites.includes(restId);
}

function getFavoriteRestaurants() {
    return mockRestaurants.filter(r => appState.favorites.includes(r.id));
}

function updateFavoriteBtn() {
    if (!appState.currentRestaurant) return;

    const isFav = isFavorite(appState.currentRestaurant.id);
    const btn = btnFavorite;

    if (isFav) {
        btn.innerHTML = `<i class="fa-solid fa-heart" style="color:var(--error-color)"></i> Favorited`;
        btn.style.borderColor = "var(--error-color)";
        btn.style.backgroundColor = "rgba(220, 53, 69, 0.05)";
    } else {
        btn.innerHTML = `<i class="fa-regular fa-heart"></i> Favorite`;
        btn.style.borderColor = "var(--border-color)";
        btn.style.backgroundColor = "";
    }
}


/* ==========================================================================
   7. UTILITY FUNCTIONS (Theme, Toast, Skeletons)
   ========================================================================== */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');

    // Detect system preference
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use stored preference or system preference as fallback
    let isDark = appState.theme === 'dark' || (appState.theme === 'auto' && systemPrefersDark);

    const applyTheme = () => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            themeBtn.title = 'Switch to light mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            themeBtn.title = 'Switch to dark mode';
        }
    };

    applyTheme();

    // Theme toggle handler
    themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        appState.theme = isDark ? 'dark' : 'light';
        StorageManager.set('feasto_theme', appState.theme);
        applyTheme();

        showToast(`Switched to ${isDark ? 'dark' : 'light'} mode`, isDark ? "fa-moon" : "fa-sun");
    });

    // Listen for system theme changes when in auto mode
    if (appState.theme === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            isDark = e.matches;
            applyTheme();
        });
    }
}

function showToast(message, iconClass = "fa-circle-info", color = "inherit") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${iconClass}" style="color:${color}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Wait for CSS transition
    }, 3000);
}

function showSkeletons(container, count, type) {
    let html = '';
    if (type === 'restaurant') {
        for (let i = 0; i < count; i++) {
            html += `
                <div class="restaurant-card skeleton" style="height: 320px; border:none; box-shadow:none;">
                    <div style="width:100%; height:200px; background:rgba(0,0,0,0.1)"></div>
                    <div style="padding:16px;">
                        <div style="width:70%; height:20px; background:rgba(0,0,0,0.1); margin-bottom:12px"></div>
                        <div style="width:40%; height:15px; background:rgba(0,0,0,0.1)"></div>
                    </div>
                </div>
            `;
        }
    }
    container.innerHTML = html;
}