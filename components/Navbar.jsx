import React from 'react';
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai";
import { useSateContext } from '../context/StateContext';
import { Cart } from './';

const Navbar = () => {
    // Context api's needed to modify the cart state
    const { showCart, setShowCart, totalQuantity } = useSateContext();
    return (
        <div className='navbar-container'>
            <p className="logo">
                <Link href='/'>
                    TechMania
                </Link>
            </p>

            <button 
                type="button"
                className='cart-icon'
                onClick={() => setShowCart(true)}
            >
                <AiOutlineShopping />

                <span className="cart-item-qty">
                    {totalQuantity}
                </span>
            </button>

            {showCart && <Cart />}
        </div>
    );
}

export default Navbar;
