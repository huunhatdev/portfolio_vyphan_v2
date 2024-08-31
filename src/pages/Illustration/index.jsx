import TitleSection from '../../components/TitleSection';
import IllustratedProject from './components/illustratedProject';

const Illustration = () => {
    return (
        <div>
            <p className="w-[23rem] text-3xl font text-center font-fair mx-auto"></p>
            <TitleSection color="#FDDBDE" title={`View my first illustrated\nchildren’s education book!`} />
            <TitleSection color="#DBEBBB" title={`My other illustrated projects`} />
            <IllustratedProject />
        </div>
    );
};

export default Illustration;
