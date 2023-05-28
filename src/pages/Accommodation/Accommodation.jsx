import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/FetchLogement';
import Cover from '../../components/Cover/Cover';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';

const Accommodation = () => {
    const params = useParams()
    console.log(params)
    const houseDetail = Data().filter((obj) => obj.id === params.id)

    return (
        <div className='accommodation'>
            {houseDetail.map((detail) => (
                <section>
                    <Cover img={detail.cover} />
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
                        <section className='accommodation__profil'>
                        <div>
                                <p>{detail.host.name}</p>

                            </div>
                        </section>
                    </section>
                    <section className='accommodation__description-container'>
                        <Collapse title="Description" description={detail.description} size='45%' status={true} />
                        <Collapse title="Equipement" description={detail.equipments.map((equi) => (<p key={equi} className='accommodation__equipment'>{equi}</p>))} size='45%' status={true} />
                    </section>
                </section>
            ))}
        </div>
    );
};

export default Accommodation;