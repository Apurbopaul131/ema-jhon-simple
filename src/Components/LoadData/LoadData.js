import { getShoppingCart } from "../Utilities/fakeDB";

const getLocalCart =async()=>{
    const allProducts = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    const allProductResult = await allProducts.json()
    const shoppingCart = getShoppingCart();
    const savedCart = [];
    for(const id in shoppingCart){
        const addedProduct = allProductResult.find((product)=>product.id === id);
        addedProduct.quantity = shoppingCart[id];
        savedCart.push(addedProduct);
    }
    return savedCart;
}
export default getLocalCart;