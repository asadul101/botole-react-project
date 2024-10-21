const getStorageCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return []
}

const savedCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id => {
    const cart = getStorageCart();
    cart.push(id)
    // save to local storage
    savedCartToLS(cart)
}

const remaningCartLS = id => {
    const cart = getStorageCart()
    // remaing cart
    const rimaning = cart.filter(idx => idx !== id);
    savedCartToLS(rimaning)
}

export { addToLS, getStorageCart,remaningCartLS }


/* 
    // const getStorageCart=()=>{
//     const storagCart=localStorage.getItem('cart');
//     if(storagCart){
//         return JSON.parse(storagCart)
//    }
//    return []
// }

// const savedCart=cart=>{
//     const storageStringfied=JSON.stringify(cart);
//     localStorage.setItem(storageStringfied)
// }

// const addToLs=id=>{
//     const cart = getStorageCart();
//     cart.push(id);
//     // saved cart
//     savedCart(cart)
// }
*/