
updateCartTotal();


var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {addToCart(this);});
}

function addToCart(elem){
    var getproductName;
    var getprice;
    var cart = [];
    var siblings = [];
    var stringCart;
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue;   // 3 stands dor text
        if(elem.className == "price"){
            getprice = elem.innerText;
        }
        if (elem.className == "card-title") {
            getproductName = elem.innerText;
        }
        siblings.push(elem);
    }
    // product object
    var product = {
        productname : getproductName,
        price : getprice
    }

    stringProduct = JSON.stringify(product)  //converting data into JSON  to store

    if(!sessionStorage.getItem('cart')){            //append product JSON object to cart array       
        cart.push(stringProduct);
        stringCart = JSON.stringify(cart);          //create session storage cart item      
        sessionStorage.setItem('cart', stringCart);
       // addedToCart(getproductName);
        updateCartTotal();
    }
    else {         
       cart = JSON.parse(sessionStorage.getItem('cart'));       
        cart.push(stringProduct);        
        stringCart = JSON.stringify(cart);            //overwrite cart data in sessionstorage        
        sessionStorage.setItem('cart', stringCart);
        (getprodaddedToCartuctName);
        updateCartTotal();
    }

}

function updateCartTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    if(sessionStorage.getItem('cart')) {      
        var cart = JSON.parse(sessionStorage.getItem('cart'));             //get cart data & parse to array    
        items = cart.length;                                            //get no of items in cart      
        for (var i = 0; i < items; i++){                             //loop over cart array            
            var x = JSON.parse(cart[i]);                             //convert each JSON product in array back into object           
            price = parseFloat(x.price.split('$')[1]);            //get property value of price
            productname = x.productname;           
            carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>"; //add price to total
            total += price;
        }
    }

    //update total on website HTML
    document.getElementById("total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}

 
  