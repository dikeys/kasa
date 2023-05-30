import imgPrev from '../../assets/img/previous.svg'
import imgNext from '../../assets/img/next.svg'
const Slideshow = ({ img, index, setNext }) => {
    return (
        <div className='slideshow'>
            <button onClick={() => setNext(index <= 0 ? img.length -2: index - 1)} className='slideshow__prev'>
                <img src={imgPrev} alt="" />
            </button>
            <img className='slideshow__img' src={img[index]} alt="cover house" />
            <button onClick={() => {setNext(index > img.length - 2 ? 0 : index + 1)}} className='slideshow__next'>
                <img src={imgNext} alt="" />
            </button>
        </div>
    );
};

export default Slideshow;