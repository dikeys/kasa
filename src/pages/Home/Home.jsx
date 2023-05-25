import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerHome  from '../../assets/img/bannerHome.svg';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';


const Home = () => {
     const text = "Chez vous, partout et ailleurs"

    
    return (
        <div>
            <Banner url={bannerHome} text={text}/>
            <div className='card-wrapper'>
            <Card />
                
            </div>
            <Footer/>
        </div>
    );
};


export default Home;