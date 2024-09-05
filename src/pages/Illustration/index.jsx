import { Outlet } from 'react-router-dom';

const Illustration = () => {
    return (
        <div className="container__box">
            <Outlet />
        </div>
    );
};

export default Illustration;
