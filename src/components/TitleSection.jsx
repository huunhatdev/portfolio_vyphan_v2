import { IconBgTitle } from '../assets/icons/IconBgTitle';

const TitleSection = ({ children, title = '', color = '' }) => {
    return (
        <div className="text-3xl font text-center font-fair mx-auto relative mb-10">
            <div className="absolute top-0 left-1/2 translate-x-[-50%]">
                <IconBgTitle color={color} />
            </div>
            <h2 className="relative z-10 whitespace-pre-wrap leading-10">{children || title}</h2>
        </div>
    );
};

export default TitleSection;
