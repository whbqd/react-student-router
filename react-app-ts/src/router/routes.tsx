import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About';
import Add from '../components/Add';
import Tel from "../components/Tel";
import Email from "../components/Email";

function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />,
            children: [
                {
                    path: 'email',
                    element: <Email />
                },
                {
                    path: 'tel',
                    element: <Tel />
                },
                {
                    path: '',
                    element: <Navigate replace to='email' />
                }
            ]
        },
        {
            path: '/add',
            element: <Add />
        },
        {
            path: '/edit/:id',
            element: <Add />
        }

    ])
}

export default Routes;
