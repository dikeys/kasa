import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import bannerHome from '../../assets/img/bannerHome.svg';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Data from '../../data/FetchLogement';
import { Link } from 'react-router-dom';

const Home = () => {
    const text = "Chez vous, partout et ailleurs"
  
    return (
        <div>
            <Banner url={bannerHome} text={text} />
            <div className='card-wrapper'>
                {Data().map((elt) => (
                    <Link key={elt.id} to={`/accommodation/${elt.id}`} >
                        <Card img={elt.cover} heading={elt.title} />
                    </Link>
                ))}

            </div>
            <Footer />
        </div>
    );
};


export default Home;