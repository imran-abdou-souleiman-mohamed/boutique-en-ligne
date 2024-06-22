const products = [
    {
        "id": 1,
        "name": "Chemise LV",
        "description": "Détail",
        "price": 790.00,
        "category": "homme",
        "subcategory": "pret-a-porter",
        "image": "p1.png"
    },
    {
        "id": 2,
        "name": "Opyum Sandales en cuir verni YSL",
        "description": "Détail",
        "price": 1200.00,
        "category": "femme",
        "subcategory": "sneaker",
        "image": "p2.jpg"
    },
    {
        "id": 3,
        "name": "Bracelet Fossil",
        "description": "Détail",
        "price": 69.00,
        "category": "homme",
        "subcategory": "bijoux",
        "image": "p3.jpg"
    },
    {
        "id": 4,
        "name": "Robe en crêpe",
        "description": "Détail",
        "price": 1690.00,
        "category": "femme",
        "subcategory": "pret-a-porter",
        "image": "p4.jpg"
    },
    {
        "id": 5,
        "name": "Adidas Samba",
        "description": "Détail",
        "price": 64.95,
        "category": "homme",
        "subcategory": "sneaker",
        "image": "p5.jpg"
    },
    {
        "id": 6,
        "name": "Bracelet Cassandre à ornements YSL",
        "description": "Détail",
        "price": 350.00,
        "category": "femme",
        "subcategory": "bijoux",
        "image": "p6.jpg"
    },
    {
        "id": 7,
        "name": "Chino LV",
        "description": "Détail",
        "price": 670.00,
        "category": "homme",
        "subcategory": "pret-a-porter",
        "image": "p7.png"
    },
    {
        "id": 8,
        "name": "Sandales en cuir Cassandra YSL",
        "description": "Détail",
        "price": 1200.00,
        "category": "femme",
        "subcategory": "sneaker",
        "image": "p8.jpg"
    },
    {
        "id": 9,
        "name": "collier en maille",
        "description": "Détail",
        "price": 129.00,
        "category": "homme",
        "subcategory": "bijoux",
        "image": "p9.jpg"
    },
    {
        "id": 10,
        "name": "Robe drapée",
        "description": "Détail",
        "price": 2490.00,
        "category": "femme",
        "subcategory": "pret-a-porter",
        "image": "p10.jpg"
    },
    {
        "id": 11,
        "name": "Vans Knu Skool",
        "description": "Détail",
        "price": 95.00,
        "category": "homme",
        "subcategory": "sneaker",
        "image": "p11.jpg"
    },
    {
        "id": 12,
        "name": "Bague à plaque Logo - Or YSL",
        "description": "Détail",
        "price": 295.00,
        "category": "femme",
        "subcategory": "bijoux",
        "image": "p12.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    displayProducts(products);
});

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}" onclick="showDetails(${product.id})">
            <h3>${product.name}</h3>
            <div class="product-details" id="details-${product.id}">
                <p>${product.description}</p>
                <p>Prix: ${product.price}€</p>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const subcategory = document.getElementById('subcategoryFilter').value;
    const filteredProducts = products.filter(product => {
        return (category === '' || product.category === category) &&
               (subcategory === '' || product.subcategory === subcategory);
    });
    displayProducts(filteredProducts);
}

function showDetails(productId) {
    const details = document.getElementById(`details-${productId}`);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
