const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.burguer-icon');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.cart-items');
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-details');
const displayMenuIcon = document.querySelector('.icon-display-menu');
const shoppingCartCounter = document.querySelector('.counter');
const shoppingCartOrderContent = document.querySelector('.my-order-content');
const searchIcon = document.querySelectorAll('.icon-search');
const searchBar = document.querySelector('.searchBarContainer');
const searchBarEraseIcon = document.querySelector('.searchBarErase');
const searchInput = document.querySelector('.searcher');

let totalPriceShoppingCart = document.querySelector('.total-price');


let counter = 0;
let idCounter = 0;
let totalParcial = 0;


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartMenu);
displayMenuIcon.addEventListener('click', toggleDesktopMenu);
searchIcon.forEach((e)=>{
    e.addEventListener('click', toggleSearchBar);
});
searchBarEraseIcon.addEventListener('click', clearFilter);

function prueba(){
    console.log("Si funciona");
}

function toggleDesktopMenu(){ 
    desktopMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    searchBar.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    searchBar.classList.add('inactive');
}

function toggleShoppingCartMenu(){
    shoppingCartMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    searchBar.classList.add('inactive');
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

function toggleSearchBar(){
    event.preventDefault();
    searchBar.classList.toggle('inactive');
    // mobileMenu.classList.add('inactive');
    // console.log('1vez');
    
}

function clearFilter(){
    console.log('si llama');
    searchInput.value = '';
    if (searchInput.value == ''){
        cardsContainer.innerHTML = '';
        listProducts(productList);
    }    
}

const searchItem = document.addEventListener('keyup', e=>{
    
    if(e.target.matches('#searcher')){
        document.querySelectorAll('.product-card').forEach(name =>{
            name.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            // console.log(name.textContent.toLowerCase());
            ?name.classList.remove('inactive')
            :name.classList.add('inactive');
        })
    };
})


const deleteItemShoppingCart = (id)=>{
    const productCartItem = document.getElementById(id);
    productCartItem.remove(id);
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
    productCartCloseIcon.addEventListener('click', ()=>{
        updateTotalPrice(product.price);
    })
    
    productCartFigure.append(productCartImg);
    productCartItem.append(productCartFigure);
    productCartItem.append(productCartFigure, productCartName, productCartPrice, productCartCloseIcon);
    shoppingCartOrderContent.append(productCartItem);

    updateTotalPrice(product.price);
}

const updateTotalPrice = (productPrice) => {
    if (event.target.classList.contains('shopping-btn') || event.target.classList.contains('btn-primary')){
        totalParcial += productPrice;
        totalPriceShoppingCart.innerText = totalParcial;
        shoppingCartCounter.innerText = counter +=1;
    } else {
        totalParcial -= productPrice;
        totalPriceShoppingCart.innerText = totalParcial;
        shoppingCartCounter.innerText = counter -=1;
    }
}

const reduceTotalPrice = (productPrice) => {
    totalParcial -= productPrice;
    totalPriceShoppingCart.innerText = totalParcial;
}

const productList = [];

productList.push({
    name: "Bicicleta antigua",
    price: 120,
    image: "https://www.popsci.com/uploads/2020/07/07/AOYRPGQSKJHM3LEJUQDXGOH374-1024x768.jpg"
});

productList.push({
    name: "Bicicleta montaña",
    price: 195,
    image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/5/27/vyj8s9gzsshtgrlptqtj/cross-country-racing-mountain-bike"
});

productList.push({
    name: "Bicicleta ruta",
    price: 175,
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
        productImg.addEventListener('click', ()=>{
            openProductInfo(product);
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productText = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.classList.add('product-name');
        productName.innerText = product.name;
        
        const shoppingIconContainer = document.createElement('figure');
        const shoppingCartIcon = document.createElement('img');
        shoppingCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        shoppingCartIcon.classList.add('shopping-btn');
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


const openProductInfo = (product)=>{
    /*<aside class="product-details inactive">
        <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="botón cerrar" class="close">
        </div>
        <img src="" alt="" class="product-image" id="product-image">
        <div class="product-info">
            <p class="product-price" id="product-price"></p>
            <p class="product-name" id="product-name"></p>
        </div>
        <button class="btn-primary">
            <img src="./icons/bt_add_to_cart.svg" alt="añadir al carro">
        </button>
    </aside> */

    productDetails.innerHTML = '';

    const productDetailCloseContainer = document.createElement('div');
    productDetailCloseContainer.classList.add('product-detail-close');
    productDetailCloseContainer.addEventListener('click', closeProductDetail);

    const productDetailCloseIcon = document.createElement('img');
    productDetailCloseIcon.setAttribute('src', './icons/icon_close.png');
    productDetailCloseIcon.classList.add('close');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.classList.add('product-image');

    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('product-detail-info');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`;
    productPrice.classList.add('product-price');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    productName.classList.add('product-name');

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('btn-primary');
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener('click', ()=>{
        renderShoppingCart(product);
    })

    const addToCartIcon = document.createElement('img');
    addToCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    addToCartIcon.classList.add('shopping-btn');
    
    addToCartButton.append(addToCartIcon);
    productInfoContainer.append(productPrice, productName, addToCartButton);
    productDetailCloseContainer.append(productDetailCloseIcon);

    productDetails.append(productDetailCloseContainer,productImage,productInfoContainer);

    productDetails.classList.remove('inactive');



    // const productDetails = document.querySelector('.product-details');
    // const productImg = document.querySelector('.product-image');
    // const productPrice = document.querySelector('.product-price');
    // const productName = document.querySelector('.product-name');

    // productDetails.classList.remove('inactive');

    // productImg.setAttribute('src', product.image);
    // productPrice.textContent = product.price;
    // productName.textContent = product.name;

    // openProductDetail();
}




