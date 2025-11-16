// Constantes
const FREE_SHIPPING_THRESHOLD = 500000; // Envío gratis sobre $500,000
const SHIPPING_COST = 15000; // Costo de envío

// Obtener carrito del localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Actualizar contador del carrito en el header
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Formatear precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

// Renderizar items del carrito
function renderCartItems() {
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');
    const itemCount = document.getElementById('itemCount');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para comenzar tu compra</p>
                <a href="index.html" class="btn-shop">Ir a la tienda</a>
            </div>
        `;
        itemCount.textContent = '0';
        updateSummary();
        return;
    }
    
    itemCount.textContent = cart.length;
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <span style="color: #666; font-size: 14px;">Cantidad:</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="item-total">${formatPrice(item.price * item.quantity)}</div>
                <button class="btn-remove" onclick="removeFromCart(${item.id})">🗑️ Eliminar</button>
            </div>
        </div>
    `).join('');
    
    updateSummary();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        saveCart(cart);
        renderCartItems();
    }
}

// Eliminar del carrito
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartItems();
    
    // Mostrar mensaje
    alert('✅ Producto eliminado del carrito');
}

// Actualizar resumen
function updateSummary() {
    const cart = getCart();
    
    // Calcular subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Calcular envío
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    
    // Calcular descuento (si hay cupón aplicado)
    const discount = parseFloat(localStorage.getItem('cartDiscount') || 0);
    
    // Calcular total
    const total = subtotal + shipping - discount;
    
    // Actualizar valores en el DOM
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = shipping === 0 ? 'GRATIS' : formatPrice(shipping);
    document.getElementById('discount').textContent = discount > 0 ? `-${formatPrice(discount)}` : '$0';
    document.getElementById('total').textContent = formatPrice(total);
    
    // Actualizar barra de progreso para envío gratis
    updateShippingProgress(subtotal);
}

// Actualizar progreso de envío gratis
function updateShippingProgress(subtotal) {
    const shippingBanner = document.getElementById('shippingBanner');
    const shippingProgress = document.getElementById('shippingProgress');
    const progressBar = document.getElementById('progressBar');
    const amountNeeded = document.getElementById('amountNeeded');
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingBanner.style.display = 'block';
        shippingProgress.style.display = 'none';
    } else if (subtotal > 0) {
        shippingBanner.style.display = 'none';
        shippingProgress.style.display = 'block';
        
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const percentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
        
        progressBar.style.width = percentage + '%';
        amountNeeded.textContent = formatPrice(remaining);
    } else {
        shippingBanner.style.display = 'none';
        shippingProgress.style.display = 'none';
    }
}

// Aplicar cupón
function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.trim().toUpperCase();
    
    // Cupones de ejemplo
    const coupons = {
        'TECH10': 0.10, // 10% de descuento
        'TECH20': 0.20, // 20% de descuento
        'WELCOME': 0.15, // 15% de descuento
        'PRIMERAVEZ': 50000 // $50,000 de descuento
    };
    
    if (coupons[couponCode]) {
        const cart = getCart();
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        let discount;
        if (typeof coupons[couponCode] === 'number' && coupons[couponCode] < 1) {
            // Descuento porcentual
            discount = subtotal * coupons[couponCode];
        } else {
            // Descuento fijo
            discount = coupons[couponCode];
        }
        
        localStorage.setItem('cartDiscount', discount);
        localStorage.setItem('appliedCoupon', couponCode);
        
        alert(`✅ Cupón "${couponCode}" aplicado correctamente. Descuento: ${formatPrice(discount)}`);
        updateSummary();
    } else {
        alert('❌ Cupón inválido o expirado');
    }
}

// Finalizar compra
function checkout() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('❌ Tu carrito está vacío');
        return;
    }
    
    // Aquí puedes redirigir a una página de checkout o procesar el pedido
    const total = document.getElementById('total').textContent;
    
    if (confirm(`¿Confirmar compra por ${total}?`)) {
        alert('🎉 ¡Gracias por tu compra! Serás redirigido al proceso de pago.\n\nEn una implementación real, aquí se procesaría el pago.');
        
        // Limpiar carrito después de la compra
        // localStorage.removeItem('cart');
        // localStorage.removeItem('cartDiscount');
        // localStorage.removeItem('appliedCoupon');
        // window.location.href = 'index.html';
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCartItems();
    
    // Restaurar cupón si existe
    const appliedCoupon = localStorage.getItem('appliedCoupon');
    if (appliedCoupon) {
        document.getElementById('couponCode').value = appliedCoupon;
    }
});