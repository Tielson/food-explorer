import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({})

interface CartProps {
    items: Array<Item>;
}

interface Item {
    product: Product;
    quantity: number;
}

interface Product {
    id: string;
    name: string;
    price: number;
}


function CartProvider({ children }: any): JSX.Element {

    const [cartItem, setCartItem] = useState<Item[]>([])
    const [valueTotal, setValueTotal] = useState(0)

    function addCart(product: Product, quantity: number) {

        if (quantity !== 0) {
            const foundItemIndex = cartItem.findIndex(item => item.product.id === product.id);

            if (foundItemIndex === -1) {
                setCartItem((prevState: any) => [...prevState, { product, quantity }]);

                return;
            }
            else {
                const existingItem = cartItem[foundItemIndex];
                const updatedItem = { ...existingItem, quantity: quantity };
                setCartItem(prevState => [
                    ...prevState.slice(0, foundItemIndex),
                    updatedItem,
                    ...prevState.slice(foundItemIndex + 1)
                ]);
            }
        }
    }

    function removeFromCart(productId: string) {
        console.log(productId);
        const foundItemIndex = cartItem.findIndex(item => item.product.id === productId);
        if (foundItemIndex !== -1) {
            setCartItem(prevState => [
                ...prevState.slice(0, foundItemIndex),
                ...prevState.slice(foundItemIndex + 1)
            ]);
        }
    }

    function ApagarCart() {
        setCartItem([])
    }



    useEffect((): any => {
        function getPriceAll() {

            let total: number = 0

            for (let i = 0; i < cartItem.length; i++) {
                let produto = cartItem[i];
                let valor_total_produto = produto.quantity * produto.product.price;
                total += valor_total_produto;
            }
            setValueTotal(total)
        }
        getPriceAll()

    }, [cartItem])

    return (
        <CartContext.Provider value={{
            addCart, cartItem, removeFromCart, valueTotal, ApagarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

function cart() {
    const context = useContext(CartContext);
    return context
}

export { CartProvider, cart }




