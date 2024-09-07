import { Link } from 'react-router-dom';
import { getImage } from 'utils/image';

const IllustratedProject = () => {
    const listImage = [
        {
            id: 1,
            imgName: 'Field Trip to the Kitchen.png',
            title: 'Field Trip to the Kitchen!',
            subTitle: 'Illustration, Book',
            path: 'kitchen'
        },
        {
            id: 2,
            imgName: 'NFT.png',
            title: 'Freelance NFT Artist',
            subTitle: 'Illustration, Crypto Collectibles',
            path: 'nft'
        },
        {
            id: 3,
            imgName: 'Veggies Got Talent!.png',
            title: 'Veggies Got Talent!',
            subTitle: 'Illustration, Poster',
            path: 'veggies'
        },
        {
            id: 4,
            imgName: '3D Art.png',
            title: 'Blender Project',
            subTitle: '3D Art',
            path: 'blender'
        },
        {
            id: 5,
            imgName: '7Mine Project.png',
            title: 'Talkshow “About Me”',
            subTitle: 'Graphic, Offline Event',
            path: 'talkshow'
        },
        {
            id: 6,
            imgName: 'Random Art.png',
            title: 'Personal Arts',
            subTitle: 'Illustration/Graphic',
            path: 'arts'
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 container__box md:px-0">
            {listImage.map((item) => (
                <ImageItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default IllustratedProject;

const ImageItem = ({ imgName = '', title = '', subTitle = '', path = '' }) => {
    return (
        <Link to={path} className="text-center">
            <img className="aspect-[3/4] w-full" src={getImage(imgName)} />
            <h3 className="my-2 font-semibold">{title}</h3>
            <h5 className="text-sm font-Jomo text-[#949494] font-normal">{subTitle}</h5>
        </Link>
    );
};
