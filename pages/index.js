import React from 'react';
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
    return (
        <>
         HeroBanner

         <div>
            <h2>Best selling products</h2>

            <p>Speakers of many variations</p>
         </div>

         <div>
            {['product1', 'product2', 'product3'].map(product => (
                <h3>{product}</h3 >
            ))}
         </div>

         Footer
        </>
    );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: {
            products,
            bannerData
        }
    }
}

export default Home;
