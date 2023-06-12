import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from '../../data/FetchLogement';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import Picture from '../../components/Picture/Picture';
import Rate from '../../components/Rate/Rate';
import Slideshow from '../../components/Slideshow/Slideshow';
import ErrorPage from '../ErrorPage/ErrorPage';
import { ListingsContext } from '../../data/FetchLogement';

const Accommodation = async  () => {

    // const navigate = useNavigate()
    // const params = useParams()
    // const houseDetail =  Data().filter((obj) => obj.id === params.id);

    // useEffect(() => {
    //     if (houseDetail.length === 0) {
    //         navigate('/404');
    //     }

    // },[])
    // console.log(houseDetail)

    const id = useParams()
    const { listingsData: listings } = useContext(ListingsContext)
  
    let idMatch = false
    if (listings.length >= 1) {
      listings.forEach((listing) => {
        if (listing.id === id.id) {
          idMatch = true
        }
      })
    }
  
    if (!idMatch) return <ErrorPage />





    return (listings &&
        <div className='accommodation'>

            {listings.map((detail) => (
                <section key={detail.id}>

                    <Slideshow img={detail.pictures} />

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