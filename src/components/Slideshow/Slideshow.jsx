import imgPrev from '../../assets/img/previous.svg'
import imgNext from '../../assets/img/next.svg'
import { useState } from 'react';
const Slideshow = ({ img }) => {

    const [index, setNext] = useState(0)
  
    return (
        <div className='slideshow'>

            <button onClick={() => setNext(index <= 0 ? img.length - 2 : index - 1)} className={`slideshow__prev ${img.length < 2 ? "slideshow__hidden" : ""}`}>
                <img src={imgPrev} alt="previous" />
            </button>

            <div className='slideshow__img-container'>
                <img className='slideshow__img' src={img[index]} alt="cover house" />
                <span className={`slideshow__img-number ${img.length < 2 ? "slideshow__hidden" : ""}`}>{` ${index + 1}/${img.length}`}</span>
            </div>

            <button onClick={() => { setNext(index > img.length - 2 ? 0 : index + 1) }} className={`slideshow__next ${img.length < 2 ? "slideshow__hidden" : ""}`}>
                <img src={imgNext} alt="next" />
            </button>
        </div>
    );
};

export default Slideshow;


