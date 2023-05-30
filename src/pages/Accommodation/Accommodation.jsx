import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/FetchLogement';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import Picture from '../../components/Picture/Picture';
import Rate from '../../components/Rate/Rate';
import Slideshow from '../../components/Slideshow/Slideshow';

const Accommodation = () => {
    const params = useParams()
    const houseDetail = Data().filter((obj) => obj.id === params.id)
    const [index, setNext] = useState(0)

    return (
        <div className='accommodation'>
            {houseDetail.map((detail) => (
                <section key={detail.id}>
                    <Slideshow index={index} setNext={setNext} img={detail.pictures}  />
                    <section className='accommodation__informations'>
                        <section>
                            <h1 className='accommodation__title'>{detail.title}</h1>
                            <p className='accommodation__location'>{detail.location}</p>
                            <ul className='accommodation__tag'>
                                {detail.tags.map((tag) =>
                                (
                                    <li key={tag}><Tag title={tag} /></li>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <section className='accommodation__profil'>
                                <div>
                                    <p className='accommodation__user'>{detail.host.name.split(' ')[0]}</p>
                                    <p className='accommodation__user'>{detail.host.name.split(' ')[1]}</p>
                                </div>
                                <div>
                                    <Picture img={detail.host.picture} />
                                </div>

                            </section>
                            <Rate rating={detail.rating} />
                        </section>
                    </section>
                    <section className='accommodation__description-container'>
                        <Collapse title="Description" description={detail.description} size='45%' status={true} />
                        <Collapse title="Equipements" description={detail.equipments.map((equipment) => (<p key={equipment} className='accommodation__equipment'>{equipment}</p>))} size='45%' status={true} />
                    </section>
                </section>
            ))}
        </div>
    );
};

export default Accommodation;