import { getImage } from '../../../utils/image';

const IllustratedProject = () => {
    const listImage = [
        {
            id: 1,
            imgName: 'Field Trip to the Kitchen.png',
            title: 'Field Trip to the Kitchen!',
            subTitle: 'Illustration, Book'
        },
        {
            id: 2,
            imgName: 'NFT.png',
            title: 'Freelance NFT Artist',
            subTitle: 'Illustration, Crypto Collectibles'
        },
        {
            id: 3,
            imgName: 'Veggies Got Talent!.png',
            title: 'Veggies Got Talent!',
            subTitle: 'Illustration, Poster'
        },
        {
            id: 4,
            imgName: '3D Art.png',
            title: 'Blender Project',
            subTitle: '3D Art'
        },
        {
            id: 5,
            imgName: '7Mine Project.png',
            title: 'Talkshow “About Me”',
            subTitle: 'Graphic, Offline Event'
        },
        {
            id: 6,
            imgName: 'Random Art.png',
            title: 'Personal Arts',
            subTitle: 'Illustration/Graphic'
        }
    ];
    return (
        <div className="grid grid-cols-3 gap-8 ">
            {listImage.map((item) => (
                <ImageItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default IllustratedProject;

const ImageItem = ({ imgName = '', title = '', subTitle = '' }) => {
    return (
        <div className="text-center">
            <img className="aspect-[3/4]" src={getImage(imgName)} />
            <h3 className="font-semibold my-2">{title}</h3>
            <h5 className="text-sm font-Jomo text-[#949494] font-normal">{subTitle}</h5>
        </div>
    );
};
