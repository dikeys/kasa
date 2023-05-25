import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerAbout from '../../assets/img/bannerAbout.png'
import Collapse from '../../components/Collapse/Collapse';

const About = () => {
    return (
        <div>
            <Banner url={bannerAbout}/>
            <Collapse title={"Fiabilité"} description={"sdfsfsfdsfsdfsdf sffzefrez "}/>
        </div>
    );
};

export default About;