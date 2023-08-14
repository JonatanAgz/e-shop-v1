const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.burguer-icon');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.cart-items');
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-details');
const btnCloseDetails = document.querySelector('.product-detail-close');
const displayMenuIcon = document.querySelector('.icon-display-menu');
const shoppingCartCounter = document.querySelector('.counter');
const shoppingCartOrderContent = document.querySelector('.my-order-content');
const totalPriceShoppingCart = document.querySelector('.total-price');

let counter = 0;
let idCounter = 0;


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartMenu);
btnCloseDetails.addEventListener('click', closeProductDetail);
displayMenuIcon.addEventListener('click', toggleDesktopMenu);
// shoppingButton.addEventListener('click', prueba);


function prueba(){
    console.log("Si funciona");
}

function toggleDesktopMenu(){ 
    desktopMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
}

function toggleShoppingCartMenu(){
    shoppingCartMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
}

function openProductDetail(){
    shoppingCartMenu.classList.add('inactive');
    productDetails.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetail(){
    productDetails.classList.add('inactive');
    // const productImage = document.querySelector('.product-image');
    // const productPrice = document.querySelector('.product-price');
    // const productName = document.querySelector('.product-name');
    // productImage.setAttribute('src', '');
    // productPrice.innerText = '';
    // productName.innerText = '';
}

function shoppingCartCount(){
    shoppingCartCounter.innerText = counter +=1;
}

function shoppingCartReduce(){
    shoppingCartCounter.innerText = counter -=1;
}

const deleteItemShoppingCart = (id)=>{
    const productCartItem = document.getElementById(id);
    productCartItem.remove(id);
    console.log(productCartItem);
}

const renderShoppingCart = (product)=>{
    // <div class="shopping-cart-item">
    //     <figure>
    //         <img src="https://www.popsci.com/uploads/2020/07/07/AOYRPGQSKJHM3LEJUQDXGOH374-1024x768.jpg" alt="bike" />
    //     </figure>
    //     <p>Bike</p>
    //     <p>$ 49.99</p>
    //     <img src="/icons/icon_close.png" alt="close" />
    // </div>
    idCounter++;

    const productCartItem = document.createElement('div');
    productCartItem.classList.add('shopping-cart-item');
    productCartItem.setAttribute('id', idCounter);

    const productCartFigure = document.createElement('figure');

    const productCartImg = document.createElement('img');
    productCartImg.setAttribute('src', product.image);

    const productCartName = document.createElement('p');
    productCartName.textContent = product.name;
    const productCartPrice = document.createElement('p');
    productCartPrice.textContent = product.price;
    const productCartCloseIcon = document.createElement('img');
    productCartCloseIcon.setAttribute('src', './icons/icon_close.png');
    productCartCloseIcon.classList.add('close-item');
    productCartCloseIcon.addEventListener('click', ()=>{
        deleteItemShoppingCart(productCartItem.id);
    });
    productCartCloseIcon.addEventListener('click', shoppingCartReduce);
    
    productCartFigure.append(productCartImg);
    productCartItem.append(productCartFigure);
    productCartItem.append(productCartFigure, productCartName, productCartPrice, productCartCloseIcon);
    shoppingCartOrderContent.append(productCartItem);

    console.log(productCartItem.id);

    updateTotalPrice(product.price);
}

const updateTotalPrice = (productPrice) => {
    totalPriceShoppingCart.innerText = (productPrice+=1);
    console.log(productPrice);
}

const productList = [];

productList.push({
    name: "Bicicleta antigua",
    price: 120,
    image: "https://www.popsci.com/uploads/2020/07/07/AOYRPGQSKJHM3LEJUQDXGOH374-1024x768.jpg"
});

productList.push({
    name: "Bicicleta montaña",
    price: 225,
    image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/5/27/vyj8s9gzsshtgrlptqtj/cross-country-racing-mountain-bike"
});

productList.push({
    name: "Bicicleta ruta",
    price: 195,
    image: "https://ciclocross.com.co/wp-content/uploads/2022/10/alan.jpg"
});

productList.push({
    name: "Bicicleta iniciación",
    price: 112,
    image: "https://rascalrides.com/wp-content/uploads/park-cycles-14-inch-pedal-bike-1024x678.jpg"
});

function listProducts(productList){
    productList.forEach(product =>{
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', detailProduct);
        productImg.addEventListener('click', ()=>{
            openProductInfo(product);
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productText = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const shoppingIconContainer = document.createElement('figure');
        const shoppingCartIcon = document.createElement('img');
        shoppingCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        shoppingCartIcon.classList.add('shopping-btn');
        shoppingCartIcon.addEventListener('click', shoppingCartCount);
        shoppingCartIcon.addEventListener('click', ()=>{
            renderShoppingCart(product);
        });
        
        shoppingIconContainer.appendChild(shoppingCartIcon);
        
        productText.append(productPrice, productName);
        
        productInfo.append(productText, shoppingIconContainer);
        
        productCard.append(productImg, productInfo);
        
        cardsContainer.appendChild(productCard);
    });
}

listProducts(productList);

/*
<aside class="product-detail inactive">
        <div class="product-detail-close">
            <img src="/icons/icon_close.png" alt="close" class="close" />
        </div>
        <img src="https://www.popsci.com/uploads/2020/07/07/AOYRPGQSKJHM3LEJUQDXGOH374-1024x768.jpg" alt="product"
            class="product-image" />
        <div class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="product-detail-info">
            <p>$ 49.99</p>
            <p>Retro Bike</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam
                unde suscipit rerum, eligendi quis. Blanditiis eos dolorum qui vel,
                sapiente aperiam similique! Inventore et assumenda, odit distinctio
                ipsa quo.
            </p>
            <button class="btn-primary">
                <img src="/icons/bt_add_to_cart.svg" alt="add to cart" />Add to cart
            </button>
        </div>
    </aside>
    */

const openProductInfo = (product)=>{
    const productDetails = document.querySelector('.product-details');
    const productImg = document.querySelector('.product-image');
    const productPrice = document.querySelector('.product-price');
    const productName = document.querySelector('.product-name');

    productDetails.classList.remove('inactive');

    productImg.setAttribute('src', product.image);
    productPrice.textContent = product.price;
    productName.textContent = product.name;

    openProductDetail();
}


function detailProduct(e){
        productDetails.classList.remove('inactive');

        const imagenProducto = document.querySelector('.product-image');
        imagenProducto.setAttribute('src', e.target.src);
        
        const precioProducto = document.querySelector('.product-price');
        precioProducto.innerText = e.target.nextElementSibling.innerText;
        console.log(precioProducto);

        // const nombreProducto = document.querySelector('.product-name');
        // nombreProducto.innerText = e.target.nextElementSibling.innerText;

        // const productDetailClose = document.createElement('div');
        // productDetailClose.classList.add('product-detail-close');
        // productDetailClose.addEventListener('click', closeProductDetail);

        // const iconClose = document.createElement('img');
        // iconClose.classList.add('close');
        // iconClose.setAttribute('src', '/icons/icon_close.png');

        // const productImage = document.createElement('img');
        // productImage.setAttribute('src', e.target.src);
        // productImage.classList.add('product-image');

        // const dotsContainer = document.createElement('div');
        // dotsContainer.classList.add('dots');

        // const dot1 = document.createElement('span');
        // const dot2 = document.createElement('span');
        // const dot3 = document.createElement('span');

        // const productDetailInfo = document.createElement('div');
        // productDetailInfo.classList.add('product-detail-info');
        
        // const productPrice = document.createElement('p');
        // productPrice.innerText = e.target.nextElementSibling.firstChild.firstChild.innerText;
        // productPrice.classList.add('product-price');

        // const productName = document.createElement('p');
        // productName.innerText = e.target.nextElementSibling.firstChild.lastChild.innerText;
        // productName.classList.add('product-name');

        // const productDescription = document.createElement('p');
        // productDescription.innerText = "Por ahora nada";

        // const button = document.createElement('button');
        // button.classList.add('btn-primary');

        // const addToCartIcon = document.createElement('img');
        // addToCartIcon.setAttribute('src', '/icons/bt_add_to_cart.svg');

        // button.append(addToCartIcon);

        // productDetailInfo.append(productPrice, productName, productDescription);

        // dotsContainer.append(dot1, dot2, dot3);

        // productDetailClose.append(iconClose);

        // productDetails.append(productDetailClose, productImage, dotsContainer, productDetailInfo, button);

    
}

