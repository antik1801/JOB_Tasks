import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main';
import LoginPage from '../components/LoginPage/LoginPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <LoginPage />
            }
        ]
    }
])

export default router;