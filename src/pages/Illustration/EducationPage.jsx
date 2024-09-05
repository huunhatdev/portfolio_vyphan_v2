import { Link } from 'react-router-dom';
import { getImage } from '../../utils/image';

const EducationPage = () => {
    return (
        <div>
            <h2 className="font-bold text-5xl text-[#9A3935] max-w-[33rem] text-center whitespace-pre-wrap leading-tight mx-auto mb-2">
                {'Veggies Got Talent!\nA Fun-Filled Activity Kit'}
            </h2>
            <p className="font-semibold text-2xl text-[#AE8B6E] mx-auto text-center mb-6">
                with Coloring Sheets, Rhymin’ Beats, and Recipes for Tasty Treats!
            </p>

            <div className="relative container__box">
                <div className="relative z-10 flex items-center px-4">
                    <img className="w-[40%]" src={getImage('Front and Back spiral 1.png')} alt="" />
                    <div className="py-6">
                        <p className="mb-4 text-white ">
                            In today’s society, where the marketing for processed and fast foods is predominantly
                            advertised, I recognized the importance of taking action in encouraging children to consume
                            fruits and vegetables. Collaborating closely with FoodPlay’s founder, we embarked on the{' '}
                            <span className="font-bold">Veggies Got Talent! A Fun-Filled Activity Kit</span> to make the
                            consumption of vegetables enjoyable.
                            <br />
                            <br />
                            Kids can even put on their own <span className="font-bold">
                                “Veggies Got Talent! Show”
                            </span>{' '}
                            to promote veggies to their peers and families in an inspiring performance guaranteed to
                            increase children’s preferences for vegetables!
                        </p>
                        <div className="flex gap-3">
                            <Link to={'activity'} className="button">
                                Order Here
                            </Link>
                            <Link to={'activity'} className="button">
                                Order Here
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#9A3935] pl-[7%] absolute w-[80%] h-full right-0 top-0 z-0"></div>
            </div>
        </div>
    );
};

export default EducationPage;
