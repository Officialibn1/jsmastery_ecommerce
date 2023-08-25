import React, { useState, createContext, useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({ children }) => {
    // State to toggle the visibility of cart
    const [showCart, setShowCart] = useState(false);

    // State to handle the unique items in the cart
    const [cartItems, setCartItems] = useState([]);

    // State to track the entire quantity of items in the cart
    const [totalQuantity, setTotalQuantity] = useState(0);

    // State to track the total price of items in the cart
    const [totalPrice, setTotalPrice] = useState(0);

    // State to track the quantity of each individual item with an initial value of 1
    const [itemQuantity, setItemQuantity] = useState(1);

    // Function to add an existing item to the cart
    const addItem = (product, quantity) => {
        // Check if the product ia an item in the cart
        const checkCartProduct = cartItems.find(item => item._id === product._id);
        
        // change the state of the total price
        setTotalPrice((prev) => prev + product.price * quantity);

        // Change the state of the total quantity
        setTotalQuantity((prev) => prev + quantity);

        // Run this condition if the check above is true
        if(checkCartProduct) {

            const updatedCartState = cartItems.map((item) => {
                if(item._id === product._id) return {
                    ...item,
                    quantity: item.quantity + quantity
                }
            })

            setCartItems(updatedCartState);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}])
        }
        
        
        toast.success(`${quantity} ${product.name} added to cart!`)
    }

    // Fucntion to increate an Item quantity
    const increaseQuantity = () => {
        setItemQuantity((prev) => prev < 10 ? prev + 1 : prev)
    }

    // Function to reduce an Item quantity
    const decreaseQuantity = () => {
        setItemQuantity((prev) => prev > 1 ? prev - 1 : prev)
    }

    return (
        <Context.Provider
            value = {{
                showCart,
                cartItems,
                totalQuantity,
                totalPrice,
                itemQuantity,
                increaseQuantity,
                decreaseQuantity,
                addItem
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useSateContext = () => useContext(Context);