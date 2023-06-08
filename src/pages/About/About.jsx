import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerAbout from '../../assets/img/bannerAbout.png'
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../data/AboutData.json'
const About = () => {

    return (
        <div>
            <Banner classBg="banner__bg banner__about" />
            {aboutData.map((data) => (
                <div key={data.id}>
                    <Collapse title={data.title} description={data.description} />
                </div>

            ))}

        </div>
    );
};

export default About;