const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

const invoiceItemsContainer = document.getElementById('invoiceItems');
let subtotal = 0;

selectedProducts.forEach(product => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('invoice-item');
    itemElement.innerHTML = `<span>${product.name}</span><span>$${product.price}</span>`;
    invoiceItemsContainer.appendChild(itemElement);

    subtotal += product.price;
});

// shows the date and calculate tax and total 
const currentDate = new Date().toLocaleDateString();
const tax = subtotal * 0.10;
const total = subtotal + tax;


// Prints out subtotal, tax, and total
document.getElementById('invoiceDate').textContent = `Date: ${currentDate}`;
document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
document.getElementById('total').textContent = `$${total.toFixed(2)}`;

// Cancel button clears localStorage and go to product page
document.getElementById('cancelBtn').addEventListener('click', function() {
    localStorage.removeItem('selectedProducts'); // Clear stored data
    window.location.href = 'products.html'; // Redirect back to product page
});

// Exit button used to close 
document.getElementById('exitBtn').addEventListener('click', function() {
    window.close(); 
});

