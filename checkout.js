import products from './product.js';

document.addEventListener('DOMContentLoaded', () => {
    const orderItemsContainer = document.querySelector('.list-group');
    const orderTotalElement = document.getElementById('order-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateOrderSummary = () => {
        orderItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cart.forEach(item => {
            const product = products.find(prod => prod.id == item.product_id);
            const itemTotalPrice = product.price * item.quantity;
            totalAmount += itemTotalPrice;

            const orderItem = document.createElement('div');
            orderItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            orderItem.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${product.image}" alt="${product.name}" class="img-thumbnail rounded" style="width: 100px; height: 100px;">
                    <div class="ms-3">
                        <h5 class="mb-1">${product.name}</h5>
                        <div class="quantity-controls">
                        <button class="btn btn-success btn-sm increase" data-id="${item.product_id}">+</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-danger btn-sm decrease" data-id="${item.product_id}">-</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="badge bg-primary rounded">$${itemTotalPrice.toFixed(2)}</span>
                    <button class="btn btn-danger btn-sm ms-2 remove" data-id="${item.product_id}">Remove</button>
                </div>
            `;

            orderItemsContainer.appendChild(orderItem);
        });

        orderTotalElement.textContent = totalAmount.toFixed(2);
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateOrderSummary();
    };

    orderItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        const id = target.dataset.id;

        if (target.classList.contains('increase')) {
            const item = cart.find(product => product.product_id == id);
            item.quantity += 1;
        } else if (target.classList.contains('decrease')) {
            const item = cart.find(product => product.product_id == id);
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart.splice(cart.indexOf(item), 1);
            }
        } else if (target.classList.contains('remove')) {
            const item = cart.find(product => product.product_id == id);
            cart.splice(cart.indexOf(item), 1);
        }

        updateCart();
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        alert('Proceeding to checkout!');
    });

    updateOrderSummary();
});
