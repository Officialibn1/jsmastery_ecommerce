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
                <Link href='https://instagram.com' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                        <AiFillInstagram />
                    </a>
                </Link>

                <Link href='' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                        <AiOutlineTwitter />
                    </a>
                </Link>

                <Link href='' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                        <AiOutlineGithub />
                    </a>
                </Link>

                <Link href='' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                        <AiFillLinkedin />
                    </a>
                </Link>
            </p>
        </div>
    );
}

export default Footer;
