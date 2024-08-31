import { Outlet } from 'react-router-dom';
import { getImage } from '../utils/image';
import { IconInstagram } from '../assets/icons/IconInstagram';
import { IconMail } from '../assets/icons/IconMail';
import SideBar from './SideBar';

const MainLayout = () => {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <div className="h-[35px] bg-[#FDDBDE]"></div>
            <div className="container flex flex-col items-center mx-auto py-10 flex-1">
                <div className="flex flex-col items-center gap-3">
                    <img className="w-32 h-30" src={getImage('Lan_Vy 1.png')} />
                    <p className="max-w-[420px] text-center text-[20px]">
                        Hello, I’m Vy, a freelance visual designer and a nutrition student based in the United States.
                    </p>
                    <img className="w-20 h-4" src={getImage('3dots.png')} />
                </div>
                <SideBar />
                <Outlet />
            </div>
            <div
                className="min-h-32 bg-cover flex flex-col justify-end items-center gap-2 pb-2"
                style={{ backgroundImage: `url("${getImage('footer.png')}")` }}
            >
                <div className="flex justify-center gap-2">
                    <a href="https://www.instagram.com/vyphan.palette/">
                        <IconInstagram />
                    </a>
                    <a href="mailto:vyphan.designer@gmail.com">
                        <IconMail />
                    </a>
                </div>
                <span className="font-normal">© 2024 Vy Phan. All rights reserved.</span>
            </div>
        </div>
    );
};

export default MainLayout;
