// Productos en oferta (solo los que tienen descuento)
const offerProducts = products.filter(p => p.discount > 0);

// Renderizar ofertas
function renderOffers(filteredOffers = offerProducts) {
    const grid = document.getElementById('offersGrid');
    
    if (filteredOffers.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 60px; color: #666;">No hay ofertas disponibles en este momento</p>';
        return;
    }
    
    grid.innerHTML = filteredOffers.map(product => `
        <div class="product-card" onclick="viewProductDetail(${product.id})">
            <div class="offer-badge">-${product.discount}% OFF</div>
            ${product.discount >= 15 ? '<div class="limited-badge">🔥 HOT</div>' : ''}
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    <span class="price-old">${formatPrice(product.oldPrice)}</span>
                </div>
                <div class="offer-countdown">⏰ Oferta por tiempo limitado</div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); viewProductDetail(${product.id})">
                    Ver Detalles
                </button>
            </div>
        </div>
    `).join('');
}

// Filtrar ofertas
function filterOffers(type) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    let filtered = offerProducts;
    
    switch(type) {
        case 'high':
            filtered = offerProducts.filter(p => p.discount > 15);
            break;
        case 'medium':
            filtered = offerProducts.filter(p => p.discount >= 10 && p.discount <= 15);
            break;
        case 'low':
            filtered = offerProducts.filter(p => p.discount < 10);
            break;
        case 'all':
        default:
            filtered = offerProducts;
    }
    
    renderOffers(filtered);
}

// Contador regresivo
function startCountdown() {
    // Fecha de finalización: 7 días desde ahora
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        
        if (distance < 0) {
            // Si el tiempo se acabó, reiniciar
            endDate.setDate(endDate.getDate() + 7);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    renderOffers();
    startCountdown();
});