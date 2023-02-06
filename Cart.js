 

// const addToCartButtons = document.querySelectorAll('.addtocart');
// for (const button of addToCartButtons) {
//   button.addEventListener('click', addToCart);
// }

// function addToCart(event) {
//   const button = event.target;
//   const card = button.closest('.card');
//   const title = card.querySelector('.card-title').textContent;
//   const x = card.querySelector('.price').textContent;
//   const price = parseFloat(x.split("$")[1]);
//   const image = card.querySelector('img').src;

//   addItemToCart(title, price, image);
//   updateCartCount();
// } 

// function addItemToCart(title, price, image) {
//   let existingRow = document.querySelector(`tr[data-title="${title}"]`);

//   if (existingRow) {
//     const quantity = parseInt(existingRow.querySelector('.quantity').textContent) + 1;
//     const newPrice = (quantity * price).toFixed(2);
//     existingRow.querySelector('.quantity').textContent = quantity;
//     existingRow.querySelector('.price').textContent = newPrice;
//   } else {
//     const cartRow = document.createElement('tr');
//     cartRow.setAttribute('data-title', title);
//     cartRow.innerHTML = `
//       <td>
//         <img src="${image}" width="80" height="80"><br>
//         ${title}
//       </td>
//       <td class="quantity">1</td>
//       <td class="price">${price}</td>
//     `;
//     carttable.appendChild(cartRow);
//   }
// }

// function updateCartCount() {
//   const itemsQuantity = document.querySelector('#itemsquantity');
//   const total = document.querySelector('#total');
//   const rows = carttable.querySelectorAll('tr');

//   let producttotal = 0;
//   let quantity = 0;
//   for (const row of rows) {
//     quantity += parseInt(row.querySelector('.quantity').textContent);
//     producttotal += parseFloat(row.querySelector('.price').textContent);
//   }
//   itemsQuantity.textContent = quantity;
//   total.textContent = producttotal.toFixed(2);
// }

  
// const addToCartButtons = document.querySelectorAll('.addtocart');
// for (const button of addToCartButtons) {
// button.addEventListener('click', addToCart);
// }

// function addToCart(event) {
// const button = event.target;
// const card = button.closest('.card');
// const title = card.querySelector('.card-title').textContent;
// const x = card.querySelector('.price').textContent;
// const price = parseFloat(x.split("$")[1]);
// const image = card.querySelector('img').src;

// addItemToCart(title, price, image);
// updateCartCount();
// }

// function addItemToCart(title, price, image) {
// let existingRow = document.querySelector(`tr[data-title="${title}"]`);

// if (existingRow) {
// let currentQuantity = parseInt(existingRow.querySelector('.quantity').textContent);
// currentQuantity++;
// existingRow.querySelector('.quantity').textContent = currentQuantity;
// existingRow.querySelector('.price').textContent = (currentQuantity * price).toFixed(2);
// } else {
// const cartRow = document.createElement('tr');
// cartRow.setAttribute('data-title', title);
// cartRow.innerHTML = `
// <td>
// <img src="${image}" width="80" height="80"><br>
// ${title}
// </td>
// <td class="quantity">1</td>
// <td class="price">${price}</td>
// <td><button class="remove">Remove</button></td>
// `;
// cartRow.querySelector('.remove').addEventListener('click', removeItemFromCart);
// carttable.appendChild(cartRow);
// }
// }

// function updateCartCount() {
// const itemsQuantity = document.querySelector('#itemsquantity');
// const total = document.querySelector('#total');
// const rows = carttable.querySelectorAll('tr');

// let producttotal = 0;
// let quantity = 0;
// for (const row of rows) {
// quantity += parseInt(row.querySelector('.quantity').textContent);
// producttotal += parseFloat(row.querySelector('.price').textContent);
// }
// itemsQuantity.textContent = quantity;
// total.textContent = producttotal.toFixed(2);
// }

// function removeItemFromCart(event) {
// const button = event.target;
// const row = button.closest('tr');
// row.remove();
// updateCartCount();
// }

const addToCartButtons = document.querySelectorAll('.addtocart');
for (const button of addToCartButtons) {
  button.addEventListener('click', addToCart);
}

function addToCart(event) {
  const button = event.target;
  const card = button.closest('.card');
  const title = card.querySelector('.card-title').textContent;
  const x = card.querySelector('.price').textContent;
  const price = parseFloat(x.split("$")[1]);
  const image = card.querySelector('img').src;

  addItemToCart(title, price, image);
  updateCartCount();
} 

function addItemToCart(title, price, image) {
  let existingRow = document.querySelector(`tr[data-title="${title}"]`);

  if (existingRow) {
    const quantityInput = existingRow.querySelector('.quantity-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    existingRow.querySelector('.price').textContent = (parseInt(quantityInput.value) * price).toFixed(2);
  } else {
    const cartRow = document.createElement('tr');
    cartRow.setAttribute('data-title', title);
    cartRow.innerHTML = `
      <td>
        <img src="${image}" width="80" height="80"><br>
        ${title}
      </td>
      <td>
        <button class="btn-minus">-</button>
        <input type="text" class="quantity-input" value="1">
        <button class="btn-plus">+</button>
      </td>
      <td class="price">${price}</td>
      <td><button class="btn-remove">Remove</button></td>
    `;

    const minusButton = cartRow.querySelector('.btn-minus');
    minusButton.addEventListener('click', () => {
      const quantityInput = cartRow.querySelector('.quantity-input');
      if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        cartRow.querySelector('.price').textContent = (parseInt(quantityInput.value) * price).toFixed(2);
      } else {
        cartRow.remove();
      }
      updateCartCount();
    });

    const plusButton = cartRow.querySelector('.btn-plus');
    plusButton.addEventListener('click', () => {
      const quantityInput = cartRow.querySelector('.quantity-input');
      quantityInput.value = parseInt(quantityInput.value) + 1;
      cartRow.querySelector('.price').textContent = (parseInt(quantityInput.value) * price).toFixed(2);
      updateCartCount();
    });

      const removeButton = cartRow.querySelector('.btn-remove');
      removeButton.addEventListener('click', () => {
      cartRow.remove();
      updateCartCount();
      });    

    carttable.appendChild(cartRow);
  }
}
 
function updateCartCount() {
  const itemsQuantity = document.querySelector('.itemsquantity');
  const total = document.querySelector('.total');
  const rows = carttable.querySelectorAll('tr');
  
  let producttotal = 0;
  let quantity = 0;
  for (const row of rows) {
  quantity += parseInt(row.querySelector('.quantity-input').value);
  producttotal += parseFloat(row.querySelector('.price').textContent);
  }
  itemsQuantity.textContent = quantity;
  total.textContent = producttotal.toFixed(2);
}

const products = document.querySelectorAll(".card");  
const searchInput = document.querySelector("input[type='text']");  

searchInput.addEventListener("input", function() { 
  const searchValue = searchInput.value.toLowerCase(); 

  products.forEach(product => {  
    const productName = product.querySelector(".card-title").textContent.toLowerCase();  

    if (productName.includes(searchValue)) {  
      product.style.display = "block";  
    } else {
      product.style.display = "none";  
    }
  });
});



//prebuilt search bar services for e-commerce site
//cache 

