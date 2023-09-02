const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.burguer-icon');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-details');
const displayMenuIcon = document.querySelector('.icon-display-menu');
const shoppingCartCounter = document.querySelector('.counter');
const shoppingCartOrderContent = document.querySelector('.my-order-content');
const searchIcon = document.querySelectorAll('.icon-search');
const searchBar = document.querySelector('.searchBarContainer');
const searchBarEraseIcon = document.querySelector('.searchBarErase');
const searchInput = document.querySelector('.searcher');
const category = document.querySelectorAll('.category');

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

// category.forEach((e)=>{
    
//     e.addEventListener('click', (e)=>{
//         e.preventDefault();
//         console.log(e.target.value);
//         if(e.target.matches('.category')){
//             document.querySelectorAll('.product-card').forEach(name => {
//                 name.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//                 ?name.classList.remove('inactive')
//                 :name.classList.add('inactive');
//             })};
//     })
// });


function test() {
    event.preventDefault();
    console.log(event);
    // console.log("a ver");
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
}

function toggleSearchBar(){
    event.preventDefault();
    searchBar.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function clearFilter(){
    searchInput.value = '';
    if (searchInput.value == ''){
        cardsContainer.innerHTML = '';
        listProducts(productList);
    }    
}

const searchItem = document.addEventListener('keyup', (e)=>{
    console.log('Evento' + e);
    if(e.target.matches('#searcher')){
        document.querySelectorAll('.product-card').forEach(name =>{
            name.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            // console.log(name.textContent.toLowerCase());
            ?name.classList.remove('inactive')
            :name.classList.add('inactive');
        })
    };
})

// const filterItem = document.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e.target);
//     if(e.target.matches('.category')){
//         document.querySelectorAll('.product-card').forEach(name => {
//             name.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//             ?name.classList.remove('inactive')
//             :name.classList.add('inactive');
//         })
//     }
// })

//********************* Lista de productos ************************************* 

const productList = [];

productList.push({
    name: "GW Jaguar 29",
    price: 120,
    image: "https://gwbicycles.com/cdn/shop/products/Bicicleta-Jaguar-MTB-29-GW-Bicycles-Colombia_1800x1800.jpg?v=1652191652"
});

productList.push({
    name: "GW Flamma",
    price: 195,
    image: "https://gwbicycles.com/cdn/shop/files/060241-4_1800x1800.jpg?v=1682623606"
});

productList.push({
    name: "GW Hyena 29",
    price: 175,
    image: "https://gwbicycles.com/cdn/shop/files/54295-2_1800x1800.jpg?v=1682610456"
});

productList.push({
    name: "GW Gavia",
    price: 112,
    image: "https://gwbicycles.com/cdn/shop/files/060248-1_1800x1800.jpg?v=1682624633"
});

productList.push({
    name: "GW Scorpion 29",
    price: 112,
    image: "https://gwbicycles.com/cdn/shop/products/Bicicleta-Scorpion-MTB-29-GW-Bicycles-Colombia_1800x1800.jpg?v=1652191706"
});

productList.push({
    name: "GW K2",
    price: 112,
    image: "https://gwbicycles.com/cdn/shop/files/63748-2_1800x1800.jpg?v=1682624483"
});

productList.push({
    name: "Specialized Epic 29",
    price: 595,
    image: 'https://marketplacer.imgix.net/RQ/8sSebv6fSlY2ST8v4SnfwMq5M.jpg?auto=format&fm=pjpg&fit=max&w=920&h=640&s=44ba07e709086854da29dbbe7e1d61da'
});

productList.push({
    name: "Specialized Fuse Sport 27.5",
    price: 595,
    image: 'https://p.vitalmtb.com/photos/products/35168/photos/82341/original_photo_219259.jpg?VersionId=FhkpIU4po0dA6O09I5PpP.ygkkAbZCVl'
});

productList.push({
    name: "Specialized Chisel 29",
    price: 595,
    image: 'https://marketplacer.imgix.net/Sn/cMP-KjEHvxBFapjJhdEa0uYTA.jpg?auto=format&fm=pjpg&fit=max&w=800&h=800&s=bf95f2bd0fbcd7b86839f687b8f886c8'
});

productList.push({
    name: "Specialized Rockhopper 29",
    price: 595,
    image: 'https://marketplacer.imgix.net/AY/AyeFVwt807FqvNqZrw47N7oSU?auto=format&fm=pjpg&fit=max&w=3000&h=2100&s=ef041286cd1d9a5b4e60d6d7e38ad33e'
});
productList.push({
    name: "Giant Fathom",
    price: 225,
    image: 'https://tiendabicicol.vteximg.com.br/arquivos/ids/166621/2201017225.jpg?v=638150120095670000'
});

productList.push({
    name: "Liv Tempt 29",
    price: 165,
    image: 'https://tiendabicicol.vteximg.com.br/arquivos/ids/166214/2201121124.jpg?v=638077426022970000'
});

productList.push({
    name: "Giant Talon 29",
    price: 365,
    image: 'https://tiendabicicol.vteximg.com.br/arquivos/ids/165866/2201104127.jpg?v=637957422667870000'
});

productList.push({
    name: "Giant Xtc Slr 29",
    price: 595,
    image: 'https://tiendabicicol.vteximg.com.br/arquivos/ids/165778/2201008224.jpg?v=637909199146400000'
});

productList.push({
    name: "Trek Procaliber 9.8",
    price: 595,
    image: 'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/Procaliber98_22_35115_A_Primary'
});

productList.push({
    name: "Trek Marlin 7",
    price: 595,
    image: 'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/Marlin7_23_36967_A_Primary'
});

productList.push({
    name: "Trek Marlin 5",
    price: 495,
    image: 'https://bikehouse.co/cdn/shop/products/MARLIN5VolttoMiamiGreenFade_720x.jpg?v=1682714684'
});

productList.push({
    name: "Trek Domane AL",
    price: 395,
    image: 'https://bikehouse.co/cdn/shop/products/domane-al-2-negra_720x.jpg?v=1662754065'
});

productList.push({
    name: "Trek X Caliber 9",
    price: 495,
    image: 'https://bikehouse.co/cdn/shop/products/XCaliber9_22_35112_B_Primary_720x.jpg?v=1658155889'
});

productList.push({
    name: "Trek Urban FX2",
    price: 295,
    image: 'https://bikehouse.co/cdn/shop/products/fx2wsdtl_720x.jpg?v=1655326184'
});

// ************ Función renderizar productos *******************
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
        shoppingCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        shoppingCartIcon.classList.add('shopping-btn');
        shoppingCartIcon.addEventListener('click', ()=>{
            renderShoppingCart(product);
        });
        
        shoppingIconContainer.appendChild(shoppingCartIcon);
        
        productText.append(productPrice, productName);
        
        productInfo.append(productText, shoppingIconContainer);
        
        productCard.append(productImg, productInfo);
        
        cardsContainer.append(productCard);
    });
}

listProducts(productList);

//************** Función abrir detalles de producto **************************/
const openProductInfo = (product)=>{
    openProductDetail();
    productDetails.innerHTML = '';

    const productDetailCloseContainer = document.createElement('div');
    productDetailCloseContainer.classList.add('product-detail-close');
    productDetailCloseContainer.addEventListener('click', closeProductDetail);

    const productDetailCloseIcon = document.createElement('img');
    productDetailCloseIcon.setAttribute('src', './assets/icons/icon_close.png');
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
    addToCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    addToCartIcon.classList.add('shopping-btn');
    
    addToCartButton.append(addToCartIcon);
    productInfoContainer.append(productPrice, productName, addToCartButton);
    productDetailCloseContainer.append(productDetailCloseIcon);

    productDetails.append(productDetailCloseContainer,productImage,productInfoContainer);

    productDetails.classList.remove('inactive');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }
)};

//*************************** Función carrito de compras **************************

const renderShoppingCart = (product)=>{
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
    productCartPrice.textContent = `$ ${product.price}`;
    const productCartCloseIcon = document.createElement('img');
    productCartCloseIcon.setAttribute('src', './icons/icon_close.png');
    productCartCloseIcon.classList.add('close');
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
        totalPriceShoppingCart.innerText = `$ ${totalParcial}`;
        shoppingCartCounter.innerText = counter +=1;
    } else {
        totalParcial -= productPrice;
        totalPriceShoppingCart.innerText = `$ ${totalParcial}`;
        shoppingCartCounter.innerText = counter -=1;
    }
}

const deleteItemShoppingCart = (id)=>{
    const productCartItem = document.getElementById(id);
    productCartItem.remove(id);
}




