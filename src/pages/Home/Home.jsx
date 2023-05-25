import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerHome  from '../../assets/img/bannerHome.svg';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import{ useEffect, useState } from 'react';

const Home = () => {
     const text = "Chez vous, partout et ailleurs"
     const [logements, setLogements] = useState([]);

     useEffect(() => {
       fetch('/data/logements.json')
         .then((response) => console.log(response))
         .then((data) => {
           setLogements(data);
         })
         .catch((error) => {
           console.log(error);
         });
     }, []);
    
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