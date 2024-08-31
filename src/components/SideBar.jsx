import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const getClassName = ({ isActive }) =>
        `w-44 text-xl mx-2 text-center ${isActive ? 'text-[#ED5A7B] underline' : ''}`;

    return (
        <div className="mt-5 mb-11">
            <NavLink to={'/'} className={getClassName}>
                Illustration/Graphic
            </NavLink>
            <NavLink to={'/design'} className={getClassName}>
                UX/UI Design
            </NavLink>
            <NavLink to={'/logofolio'} className={getClassName}>
                Logofolio
            </NavLink>
            <NavLink to={'/nutri'} className={getClassName}>
                NutriBlog
            </NavLink>
        </div>
    );
};

export default SideBar;
