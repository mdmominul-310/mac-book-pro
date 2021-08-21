//function for change inner text for price field!
function innerChanger(inputId, price) {
    document.getElementById(inputId).innerText = price;
}
function getValue(inputId) {
    const valueField = document.getElementById(inputId);
    const value = parseFloat(valueField.innerText);
    return value;
}
// function for price calculation total
function priceCalculation() {

    const bestPrice = getValue('primary-price');
    const extraMemory = getValue('extra-memory');
    const extraStorage = getValue('extra-storage');
    const fastDelivery = getValue('extra-delivery');
    const priceTotal = bestPrice + extraStorage + fastDelivery + extraMemory;
    return priceTotal;
}
// function for show the total price
function calculatePrice() {
    const priceTotal = priceCalculation();
    innerChanger('sum', priceTotal);
    innerChanger('sum-footer', priceTotal);
}
//memory section
document.getElementById('default-memory').addEventListener('click', function () {
    innerChanger('extra-memory', 00);
    calculatePrice();
})
document.getElementById('memory-update').addEventListener('click', function () {
    innerChanger('extra-memory', 180);
    calculatePrice();
})
//storage section
document.getElementById('default-storage').addEventListener('click', function () {
    innerChanger('extra-storage', 00);
    calculatePrice();
})
document.getElementById('medium-storage').addEventListener('click', function () {
    innerChanger('extra-storage', 100);
    calculatePrice();
})
document.getElementById('bigger-storage').addEventListener('click', function () {
    innerChanger('extra-storage', 180);
    calculatePrice();
})
// delievery cost
document.getElementById('default-delivery').addEventListener('click', function () {
    innerChanger('extra-delivery', 00);
    calculatePrice();
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    innerChanger('extra-delivery', 20);
    calculatePrice();
})
// promo code section 
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoField = document.getElementById('promo-input');
    const promoCode = promoField.value;
    const totalPrice = priceCalculation();
    const discount = totalPrice * .2;
    const discountedPrice = totalPrice - discount;
    if (promoCode == 'stevekaku') {
        innerChanger('sum', discountedPrice);
        innerChanger('sum-footer', discountedPrice);
        document.getElementById('error-messege').innerText = '';
    }
    else {
        calculatePrice();
        document.getElementById('error-messege').innerText = 'Wrong Promo code!';
    }

    promoField.value = '';
})


