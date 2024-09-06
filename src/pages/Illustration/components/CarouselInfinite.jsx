import Slider from 'react-slick';
import { getImage } from '../../../utils/image';

const CarouselInfinite = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };

    const listItem = ['Avocado(R) 1', 'Cabbage(R) 1', 'Carrot(R) 1', 'Avocado(R) 1', 'Cabbage(R) 1', 'Carrot(R) 1'];

    return (
        <div className="w-full mb-16 overflow-hidden">
            <Slider {...settings}>
                {listItem.map((item, index) => (
                    <img
                        key={`${item}_${index}`}
                        className="object-contain mx-auto"
                        src={getImage(`${item}.png`)}
                        alt={item}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CarouselInfinite;
