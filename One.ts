interface Product{
    id:number,
    name:string,
    price:number
}

interface CartItem extends Product{
    quantity:number,
}

interface ShoppingCart{
    cartItems:CartItem[],
    addItem(item:CartItem):void,
    reMoveItem(itemId:number):boolean,
    
}

// class BasicShoppingCart implements ShoppingCart{
    
// }

// print(ShoppingCart)