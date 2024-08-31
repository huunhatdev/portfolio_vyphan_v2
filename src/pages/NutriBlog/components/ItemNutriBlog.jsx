import { Link } from 'react-router-dom';
import { getImage } from '../../../utils/image';

const ItemNutriBlog = ({ imgSrc = '', title = '', subTitle = '', path }) => {
    return (
        <Link to={path} className="w-full border border-black border-solid">
            {!imgSrc ? (
                <div className="w-full aspect-video bg-[#FFF6F7]" />
            ) : (
                <img className="w-full aspect-video" src={getImage(imgSrc)} />
            )}
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <h5>{subTitle}</h5>
            </div>
        </Link>
    );
};

export default ItemNutriBlog;
