import { getImage } from '../../utils/image';

const RobosPage = () => {
    return (
        <div>
            <div
                className="flex flex-col items-center"
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <h3 className="text-2xl font-semibold text-[#BDCCEA] text-opacity-55">UX/UI CASE STUDY</h3>
                <img src={getImage('Group 58.png')} alt="" />
                <img src={getImage('Home Demo 1.png')} alt="" />
            </div>
        </div>
    );
};

export default RobosPage;
