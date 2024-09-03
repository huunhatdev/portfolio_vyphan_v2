import { Fragment } from 'react';
import TitleSection from '../../components/TitleSection';
import IllustratedProject from './components/illustratedProject';

const IllustrationPage = () => {
    return (
        <Fragment>
            <TitleSection color="#FDDBDE" title={`View my first illustrated\nchildren’s education book!`} />
            <TitleSection color="#DBEBBB" title={`My other illustrated projects`} />
            <IllustratedProject />
        </Fragment>
    );
};

export default IllustrationPage;
