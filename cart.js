import products from "./product.js";

const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCartSpan = document.querySelectorAll('.counter');
    let cartItems = [];

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = cartItems.findIndex((item) => item.product_id == idProduct);
        if (value <= 0) {
            cartItems.splice(positionThisProductInCart, 1);
        } else if (positionThisProductInCart < 0) {
            cartItems.push({ product_id: idProduct, quantity: 1 });
        } else {
            cartItems[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        addCartToHTML();
    };

    //displays the contents of the cart
    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalPrice = 0;
        let totalQuantity = 0;

        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                totalQuantity += item.quantity;
                let product = products.find(product => product.id == item.product_id);
                let itemTotalPrice = product.price * item.quantity;
                totalPrice += itemTotalPrice;

                let newItem = document.createElement('div');
                newItem.classList.add('item', 'd-flex', 'align-items-center');
                newItem.dataset.id = item.product_id;

                listCartHTML.appendChild(newItem);

                let productName = product.name.length > 20 ? `<div class="name long-name">${product.name}</div>` : `<div class="name">${product.name}</div>`;

                newItem.innerHTML = `
                    <div class="item-content d-flex align-items-center">
                        <div class="image "><img class="rounded" src="${product.image}" alt="${product.name}"></div>
                        <div class="product-info ms-3">
                            ${productName}
                            <div class="quantity d-flex align-items-center">
                                <button class="plus btn btn-success" data-id="${product.id}">+</button>
                                <span class="quantity-value me-1">${item.quantity}</span>
                                <button class="minus btn btn-danger me-1" data-id="${product.id}">-</button>
                            </div>
                        </div>
                    </div>
                    <div class="total-price ms-auto">₱${itemTotalPrice.toFixed(2)}</div>
                `;
            });
        } else {
            listCartHTML.innerHTML = '<p>No items in the cart</p>';
        }

        // total price of all products
        let totalWrapper = document.createElement('div');
        totalWrapper.classList.add('total-wrapper', 'd-flex', 'justify-content-between', 'align-items-center', 'mt-3');
        totalWrapper.innerHTML = `
            <div class="total-label">Total:</div>
            <div class="total-price m-1">₱${totalPrice.toFixed(2)}</div>
        `;
        listCartHTML.appendChild(totalWrapper);

        iconCartSpan.forEach(span => span.innerText = totalQuantity);
    };

    //tester:
    // document.addEventListener('DOMContentLoaded', () => {
    //     console.log("DOM content loaded.");
    //     cart();
    // });

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        if (!idProduct) return;

        let positionProductInCart = cartItems.findIndex((value) => value.product_id == idProduct);
        let quantity = null;

        switch (true) {
            case (buttonClick.classList.contains('addCart')):
                quantity = (positionProductInCart < 0) ? 1 : cartItems[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('minus')):
                quantity = cartItems[positionProductInCart].quantity - 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('plus')):
                quantity = cartItems[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            default:
                break;
        }
    });

    const initApp = () => {
        if (localStorage.getItem('cart')) {
            cartItems = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    };

    initApp();
};

export default cart;
