import React, { useRef } from 'react';
import getStripe from '../lib/getStripe';

import Link from 'next/link'

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import toast from 'react-hot-toast'

import { useSateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';


const Cart = () => {
    const cartRef = useRef()

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...')

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    const { 
        totalPrice, 
        totalQuantity, 
        cartItems, 
        setShowCart,
        toggleCartItemQuantity,
        removeCartItem
    } = useSateContext();


    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">

                {/* Button to close the cart and show the total quantity of cart items */}
                <button 
                    type="button" 
                    className="cart-heading"
                    onClick={() => setShowCart(false)}
                >
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalQuantity} items)</span>
                </button>

                {/* Cointainer that apears if the cart is empty */}
                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty!</h3>
                        <Link href='/'>
                            <button 
                                type="button"
                                className='btn'
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                {/* Cart Items container */}
                {cartItems.length > 0 && cartItems.map(item => (
                    <div className="product" key={item._id}>
                        <img 
                            src={urlFor(item?.image[0])} 
                            alt={item.name} 
                            className='cart-product-image'
                        />
                        <div className="item-desc">
                            <div className="flex top top1">
                                <h5>{item.name}</h5>
                                <h4>${item.price}</h4>
                            </div>
                            <div className="flex bottom">
                                <div>
                                    <p className="quantity-desc">
                                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')} >
                                            <AiOutlineMinus />
                                        </span>

                                        <span className="num">
                                            {item.quantity}
                                        </span>
                                        <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')} >
                                            <AiOutlinePlus />
                                        </span>
                                    </p>
                                </div>
                                <button 
                                    type="button" 
                                    className="remove-item"
                                    onClick={() => removeCartItem(item)}
                                >
                                    <TiDeleteOutline />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="cartButtomPosition">
                {cartItems.length > 0 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal: </h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button 
                                type="button" 
                                className="btn"
                                onClick={handleCheckout}    
                            >
                                PAY WITH STRIPE
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
