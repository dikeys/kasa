import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import {Data} from '../../data/FetchLogement';
import { Link } from 'react-router-dom';
import { ListingsContext } from '../../data/FetchLogement';

const Home = () => {
    const text = "Chez vous, partout et ailleurs"
    const { listingsData: listings } = useContext(ListingsContext)

    return (
        <div>
            <Banner classBg="banner__home banner__bg" text={text} />
            <div className='card-wrapper'>
                {listings.map((elt) => (
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