// VERSIÓN DE PRUEBA - product-detail.js
console.log('✅ Archivo product-detail.js cargado correctamente');

// Función para formatear precios
function formatPrice(price) {
    return '$' + price.toLocaleString('es-CO');
}

// Datos de productos extendidos
const productsData = {
    1: {
        id: 1,
        name: "Mouse Gamer Inalámbrico RGB Pro",
        category: "Mouse",
        brand: "TechGear Pro",
        price: 319000,
        oldPrice: 399000,
        discount: 20,
        icon: "🖱️",
        sku: "MGW-RGB-001",
        description: "Mouse gamer inalámbrico de alta precisión con sensor óptico de 25,000 DPI y iluminación RGB personalizable. Diseñado para jugadores profesionales que buscan rendimiento y comodidad en sesiones prolongadas. Batería de larga duración hasta 70 horas de uso continuo.",
        features: [
            "Sensor óptico de alta precisión 25,000 DPI",
            "Conexión inalámbrica de 2.4GHz ultra rápida",
            "6 botones programables personalizables",
            "Iluminación RGB con 16.8 millones de colores",
            "Batería recargable de hasta 70 horas",
            "Compatible con Windows, Mac y Linux",
            "Peso ajustable de 85g a 105g",
            "Garantía extendida de 2 años"
        ]
    },
    2: {
        id: 2,
        name: "Teclado Mecánico RGB Gaming",
        category: "Teclado",
        brand: "MechaTech",
        price: 225000,
        oldPrice: null,
        discount: 0,
        icon: "⌨️",
        sku: "TM-RGB-002",
        description: "Teclado mecánico profesional con switches intercambiables y retroiluminación RGB por tecla. Estructura de aluminio reforzado para mayor durabilidad. Perfecto para gaming competitivo y escritura profesional.",
        features: [
            "Switches mecánicos intercambiables (Red/Blue/Brown)",
            "Retroiluminación RGB personalizable por tecla",
            "N-Key Rollover completo (Anti-ghosting)",
            "Reposamuñecas ergonómico desmontable",
            "Teclas multimedia dedicadas",
            "Cable USB trenzado desmontable",
            "Software de personalización incluido",
            "Construcción premium en aluminio"
        ]
    },
    3: {
        id: 3,
        name: "Monitor Gamer 25'' 200Hz IPS",
        category: "Monitor",
        brand: "VisionMax",
        price: 589000,
        oldPrice: 635000,
        discount: 7,
        icon: "🖥️",
        sku: "MG-IPS-003",
        description: "Monitor gaming de 25 pulgadas con panel IPS de alta calidad, tasa de refresco de 200Hz y tiempo de respuesta de 1ms. Ideal para juegos competitivos con colores vibrantes y ángulos de visión amplios.",
        features: [
            "Panel IPS 25'' Full HD (1920x1080)",
            "Tasa de refresco de 200Hz",
            "Tiempo de respuesta 1ms GTG",
            "AMD FreeSync y G-Sync Compatible",
            "HDR10 para mejor contraste",
            "Ángulos de visión 178°/178°",
            "Ajuste de altura, inclinación y rotación",
            "Modo de baja luz azul para menor fatiga visual"
        ]
    },
    4: {
        id: 4,
        name: "Audífonos Gaming 7.1 Surround",
        category: "Audífonos",
        brand: "SoundWave Elite",
        price: 185000,
        oldPrice: 220000,
        discount: 16,
        icon: "🎧",
        sku: "AG-71-004",
        description: "Audífonos gaming con sonido envolvente virtual 7.1 y micrófono con cancelación de ruido. Almohadillas de memory foam para máxima comodidad en sesiones largas. Sonido de alta fidelidad para detectar cada detalle en el juego.",
        features: [
            "Sonido envolvente virtual 7.1",
            "Drivers de 50mm de alta calidad",
            "Micrófono retráctil con cancelación de ruido",
            "Almohadillas de memory foam ultra suaves",
            "Controles de volumen y silencio en cable",
            "Compatible con PC, PS5, Xbox y Switch",
            "Iluminación RGB en auriculares",
            "Cable reforzado de 2 metros"
        ]
    },
    5: {
        id: 5,
        name: "Mouse Pad XXL RGB Extended",
        category: "Mouse",
        brand: "TechGear Pro",
        price: 89000,
        oldPrice: null,
        discount: 0,
        icon: "🎨",
        sku: "MP-XXL-005",
        description: "Mouse pad gaming de tamaño extendido con superficie microtexturizada y base antideslizante. Iluminación RGB en los bordes para crear el setup perfecto. Tamaño suficiente para mouse y teclado.",
        features: [
            "Tamaño XXL: 900mm x 400mm x 4mm",
            "Superficie microtexturizada premium",
            "Base de goma natural antideslizante",
            "Iluminación RGB en 9 modos",
            "Bordes cosidos para mayor durabilidad",
            "Superficie lavable resistente al agua",
            "Cable USB de fácil conexión",
            "Diseño moderno y elegante"
        ]
    },
    6: {
        id: 6,
        name: "Webcam 4K Pro Streaming",
        category: "Cámara",
        brand: "StreamVision",
        price: 349000,
        oldPrice: 420000,
        discount: 17,
        icon: "📹",
        sku: "WC-4K-006",
        description: "Webcam profesional 4K con autofocus y corrección de luz automática. Perfecta para streaming, videollamadas y creación de contenido. Micrófonos duales con reducción de ruido integrados.",
        features: [
            "Resolución 4K Ultra HD (3840x2160) a 30fps",
            "Autofocus rápido y preciso",
            "Corrección automática de luz baja",
            "Campo de visión ajustable (65°, 78°, 90°)",
            "Micrófonos estéreo con reducción de ruido",
            "Clip universal para monitores",
            "Compatible con OBS, Zoom, Teams, etc.",
            "Plug and play sin drivers necesarios"
        ]
    },
    7: {
        id: 7,
        name: "SSD M.2 NVMe 1TB Ultra Fast",
        category: "Almacenamiento",
        brand: "SpeedDrive",
        price: 259000,
        oldPrice: null,
        discount: 0,
        icon: "💾",
        sku: "SSD-NV-007",
        description: "Unidad de estado sólido M.2 NVMe Gen4 con velocidades de lectura hasta 7000 MB/s. Perfecto para gaming, edición de video y tareas exigentes. Incluye disipador de calor.",
        features: [
            "Capacidad de 1TB (1000GB)",
            "Velocidad de lectura hasta 7000 MB/s",
            "Velocidad de escritura hasta 5000 MB/s",
            "Interfaz PCIe 4.0 x4 NVMe 1.4",
            "Tecnología 3D NAND TLC",
            "Disipador de calor incluido",
            "MTBF de 1.8 millones de horas",
            "Garantía de 5 años"
        ]
    },
    8: {
        id: 8,
        name: "Silla Gamer Ergonómica Pro",
        category: "Mobiliario",
        brand: "ComfortZone Elite",
        price: 899000,
        oldPrice: 1100000,
        discount: 18,
        icon: "🪑",
        sku: "SG-ERG-008",
        description: "Silla gaming ergonómica de alta gama con soporte lumbar ajustable y reposabrazos 4D. Diseñada para largas sesiones de gaming o trabajo. Recubrimiento de cuero PU premium y base de acero reforzado.",
        features: [
            "Respaldo reclinable hasta 180°",
            "Soporte lumbar ajustable con masaje",
            "Reposabrazos 4D completamente ajustables",
            "Cojín cervical de memory foam",
            "Capacidad de carga hasta 150kg",
            "Ruedas de nylon silenciosas",
            "Base de acero con acabado cromado",
            "Tapizado en cuero PU transpirable"
        ]
    }
};

console.log('✅ Datos de productos cargados:', Object.keys(productsData).length, 'productos');

// Cargar detalles del producto
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 DOMContentLoaded - Iniciando carga de producto...');
    
    const storedId = localStorage.getItem('selectedProduct');
    console.log('📦 ID almacenado en localStorage:', storedId);
    
    if (!storedId || storedId === 'null') {
        console.error('❌ No hay ID de producto en localStorage');
        alert('⚠️ No se seleccionó ningún producto. Redirigiendo al inicio...');
        window.location.href = 'index.html';
        return;
    }
    
    const productId = parseInt(storedId);
    console.log('🔢 ID convertido a número:', productId);
    
    const product = productsData[productId];
    console.log('🎯 Producto encontrado:', product ? product.name : 'NO ENCONTRADO');
    
    if (!product) {
        console.error('❌ Producto no encontrado. IDs disponibles:', Object.keys(productsData));
        alert('❌ Producto no encontrado. ID buscado: ' + productId);
        window.location.href = 'index.html';
        return;
    }
    
    console.log('✅ Actualizando página con datos del producto...');
    
    // Actualizar breadcrumb
    const breadcrumb = document.getElementById('breadcrumbProduct');
    if (breadcrumb) breadcrumb.textContent = product.name;
    
    // Actualizar imagen
    const productImage = document.getElementById('productImage');
    if (productImage) productImage.textContent = product.icon;
    
    // Actualizar título
    const productTitle = document.getElementById('productTitle');
    if (productTitle) productTitle.textContent = product.name;
    
    // Actualizar precio
    const productPrice = document.getElementById('productPrice');
    if (productPrice) productPrice.textContent = formatPrice(product.price);
    
    if (product.oldPrice) {
        const priceInfo = document.getElementById('priceInfo');
        if (priceInfo) {
            priceInfo.innerHTML = `
                <span class="old-price">${formatPrice(product.oldPrice)}</span>
                <span class="savings">Ahorras ${formatPrice(product.oldPrice - product.price)} (-${product.discount}%)</span>
            `;
        }
    }
    
    // Actualizar descripción
    const productDescription = document.getElementById('productDescription');
    if (productDescription) productDescription.textContent = product.description;
    
    // Actualizar características
    const featuresList = document.getElementById('featuresList');
    if (featuresList) {
        featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    }
    
    // Actualizar metadatos
    const productCategory = document.getElementById('productCategory');
    if (productCategory) productCategory.textContent = product.category;
    
    const productBrand = document.getElementById('productBrand');
    if (productBrand) productBrand.textContent = product.brand;
    
    const productSku = document.getElementById('productSku');
    if (productSku) productSku.textContent = product.sku;
    
    // Cargar productos relacionados
    loadRelatedProducts(product.category, product.id);
    
    console.log('✅ Página de producto cargada exitosamente');
});

// Cargar productos relacionados
function loadRelatedProducts(category, currentId) {
    console.log('🔗 Cargando productos relacionados de categoría:', category);
    
    const related = Object.values(productsData)
        .filter(p => p.category === category && p.id !== currentId)
        .slice(0, 4);
    
    console.log('📋 Productos relacionados encontrados:', related.length);
    
    const container = document.getElementById('relatedProducts');
    
    if (!container) {
        console.error('❌ No se encontró el contenedor de productos relacionados');
        return;
    }
    
    if (related.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No hay productos relacionados disponibles</p>';
        return;
    }
    
    container.innerHTML = related.map(product => `
        <div class="product-card" onclick="viewProductDetail(${product.id})">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                ${product.discount > 0 ? `<span class="discount-badge">-${product.discount}% OFF</span>` : ''}
            </div>
        </div>
    `).join('');
}

// Ver detalles de producto (recarga la página)
function viewProductDetail(productId) {
    console.log('🔄 Cambiando a producto:', productId);
    localStorage.setItem('selectedProduct', productId);
    window.location.reload();
}

// Contactar vendedor
function contactSeller() {
    const productId = parseInt(localStorage.getItem('selectedProduct'));
    const product = productsData[productId];
    
    if (!product) {
        alert('Error al obtener información del producto');
        return;
    }
    
    const message = `Hola, estoy interesado en el producto: ${product.name} (SKU: ${product.sku})`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Agregar a comparar
function addToCompare() {
    const productId = parseInt(localStorage.getItem('selectedProduct'));
    let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    
    if (compareList.includes(productId)) {
        alert('⚠️ Este producto ya está en tu lista de comparación');
        return;
    }
    
    if (compareList.length >= 4) {
        alert('⚠️ Solo puedes comparar hasta 4 productos a la vez');
        return;
    }
    
    compareList.push(productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    alert('✅ Producto agregado a comparación');
}

console.log('✅ Todas las funciones cargadas correctamente');