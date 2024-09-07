import { Fragment } from 'react';
import TitleSection from '../../components/TitleSection';
import IllustratedProject from './components/illustratedProject';
// import IllustratedEducation from './components/IllustratedEducation';

const IllustrationPage = () => {
    return (
        <Fragment>
            <TitleSection color="#FDDBDE" title={`View my first illustrated children's education book!`} />
            {/* <IllustratedEducation /> */}
            <TitleSection color="#DBEBBB" title={`My other illustrated projects`} />
            <IllustratedProject />
        </Fragment>
    );
};

export default IllustrationPage;
