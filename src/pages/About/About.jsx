import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerAbout from '../../assets/img/bannerAbout.png'
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../data/AboutData.json'
const About = () => {

    return (
        <div>
            <Banner url={bannerAbout} />
            {aboutData.map((data) => (
                <Collapse title={data.title} description={data.description} />
            ))}

        </div>
    );
};

export default About;