// Clolyn Bloom Haven - JavaScript Functionality

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Order Product Function
function orderProduct(productName, price) {
    const productInput = document.getElementById('selectedProduct');
    if (productInput) {
        productInput.value = productName + ' - $' + price.toFixed(2);
        // Smooth scroll to order section
        const orderSection = document.getElementById('order');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Add a subtle animation
        productInput.style.background = '#f4e4e6';
        setTimeout(() => {
            productInput.style.background = '#fdfcfb';
        }, 1000);
    }
}

// Order Form Submission
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const deliveryDate = document.getElementById('deliveryDate').value;
        const deliveryType = document.getElementById('deliveryType').value;
        
        if (!fullName || !email || !phone || !deliveryDate || !deliveryType) {
            alert('Please fill in all required fields marked with *');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // If delivery is selected, check address
        if (deliveryType === 'delivery') {
            const deliveryAddress = document.getElementById('deliveryAddress').value;
            if (!deliveryAddress.trim()) {
                alert('Please provide a delivery address for delivery orders');
                return;
            }
        }
        
        // Show modal
        const modal = document.getElementById('orderModal');
        if (modal) {
            modal.style.display = 'block';
        }
        
        // Scroll to top of modal
        modal.scrollTop = 0;
    });
}

// Modal Functions
function closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.style.display = 'none';
    }
    // Reset form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.reset();
        document.getElementById('selectedProduct').value = '';
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Set minimum date for delivery to today
document.addEventListener('DOMContentLoaded', function() {
    const deliveryDateInput = document.getElementById('deliveryDate');
    if (deliveryDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        const minDate = yyyy + '-' + mm + '-' + dd;
        deliveryDateInput.min = minDate;
    }
    
    // Add smooth scroll offset for fixed navbar
    const navHeight = document.querySelector('.navbar').offsetHeight;
    document.documentElement.style.scrollPaddingTop = navHeight + 'px';
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(250, 247, 242, 0.99)';
        navbar.style.boxShadow = '0 4px 30px rgba(168, 181, 160, 0.25)';
    } else {
        navbar.style.background = 'rgba(250, 247, 242, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(168, 181, 160, 0.15)';
    }
});
