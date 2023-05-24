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
       fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
         .then((response) => response.json())
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
            <div>
            {logements.map((logement) => (
          <li key={logement.id}>{logement.nom}</li>
        ))}
                
            </div>
            <Footer/>
        </div>
    );
};


export default Home;