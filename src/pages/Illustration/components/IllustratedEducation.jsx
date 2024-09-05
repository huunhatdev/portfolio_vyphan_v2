import { Link } from 'react-router-dom';
import { getImage } from '../../../utils/image';

const IllustratedEducation = () => {
    return (
        <div className="relative mb-10">
            <div className="bg-[#9A3935] pl-[7%] absolute w-[70%] h-full right-0 top-0 z-0"></div>
            <div className="relative z-10 flex items-center pl-16" style={{ zIndex: 2 }}>
                <img className="w-[40%]" src={getImage('Front and Back spiral 1.png')} alt="" />
                <div className="flex flex-col gap-4 py-16">
                    <p className="font-bold text-2xl text-[#F9EED4]">Veggies Got Talent! A Fun-Filled Activity Kit</p>
                    <p className="italic font-bold text-xl text-[#E8C69B]">
                        with Coloring Sheets, Rhymin’ Beats, and Recipes for Tasty Treats!
                    </p>
                    <p className="text-white">
                        I illustrated a 100-page-book, where the 30 veggie friends are not just ingredients but lively
                        characters dancing across the pages into the imagination of children and adults.
                    </p>
                    <Link to={'activity'} className="button">
                        Learn more
                    </Link>
                </div>
                <img className="object-cover h-full" src={getImage('Array 1.png')} alt="" />
            </div>
        </div>
    );
};

export default IllustratedEducation;
