function addItem(e) {
    const item = e.currentTarget.getElementsByClassName('card-item__content')[0];
    const shopItem = {
        price: convertPrice(item.getElementsByClassName('card-item__price')[0].textContent),
        name: item.getElementsByClassName('card-item__name')[0].textContent,
        licence: item.getElementsByClassName('card-item__licence')[0].textContent,
        cantidad: 1
    }
    const currentShop = JSON.parse(localStorage.getItem('cart'));
    if (currentShop === null) {
        localStorage.setItem('cart', JSON.stringify([shopItem]));
        return;
    }
    const newShop = currentShop;
    for (let index = 0; index < newShop.length; index++) {
        const item = newShop[index];
        let itemFound = false;
        if (item.name === shopItem.name && item.licence === shopItem.licence) {
            itemFound = true;
            newShop[index] = {
                ...item,
                cantidad: item.cantidad + 1
            }
            localStorage.setItem('cart', JSON.stringify(newShop));
            return;
        }

        if (index === (currentShop.length - 1) && !itemFound) {
            newShop.push(shopItem);
            localStorage.setItem('cart', JSON.stringify(newShop));
            return;
        }
    }

}

function removeItem(e) {}
function convertPrice(text) {
    return Number(text.substring(2));
}