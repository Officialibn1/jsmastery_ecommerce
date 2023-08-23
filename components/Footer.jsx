import React from 'react';
import { 
    AiFillInstagram, 
    AiOutlineTwitter, 
    AiOutlineGithub, 
    AiFillLinkedin 
} from "react-icons/ai";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2023 TechMania Headphones &copy;All Rights Reserved</p>

            <p className="icons">
                <Link href=''>
                    <AiFillInstagram />
                </Link>

                <Link href=''>
                    <AiOutlineTwitter />
                </Link>

                <Link href=''>
                    <AiOutlineGithub />
                </Link>

                <Link href=''>
                    <AiFillLinkedin />
                </Link>
            </p>
        </div>
    );
}

export default Footer;
