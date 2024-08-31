import { Outlet } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Illustration from '../pages/Illustration';
import LogoFolio from '../pages/Logofolio';
import NutriBlog from '../pages/NutriBlog';
import NutriBlogStudy from '../pages/NutriBlog/NutriBlogStudy';
import NutriBlogAntioxidants from '../pages/NutriBlog/NutriBlogAntioxidants';

export const router = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Illustration />
            },
            {
                path: 'logofolio',
                element: <LogoFolio />
            },
            {
                path: 'nutri',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <NutriBlog />
                    },
                    {
                        path: 'study',
                        element: <NutriBlogStudy />
                    },
                    {
                        path: 'antioxidants',
                        element: <NutriBlogAntioxidants />
                    }
                ]
            }
        ]
    }
];
