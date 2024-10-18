document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        window.location.href = 'loginform.html'; 
        return; 
    }


    const checkOutBtn = document.getElementById('checkOutBtn');
    if (checkOutBtn) {
        checkOutBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.product-checkbox:checked');
            let selectedProducts = [];

            checkboxes.forEach(checkbox => {
                const productName = checkbox.getAttribute('data-name');
                const productPrice = parseFloat(checkbox.getAttribute('data-price'));

                
                selectedProducts.push({ name: productName, price: productPrice });
            });

            // Store the product selected  in localStorage
            localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

            // Goes to the invoice page
            window.location.href = 'invoice.html'; 
        });
    }

    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
        
            document.querySelectorAll('.product-checkbox').forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }

    const exitBtn = document.getElementById('exitBtn');
    if (exitBtn) {
        exitBtn.addEventListener('click', function() {
            window.close(); 
        });
    }
});
