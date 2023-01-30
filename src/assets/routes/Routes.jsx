import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AdminLayouts from '../layouts/AdminLayouts';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayouts></AdminLayouts>,

        children: [
            {
                path: "/",
                element: <Login />,

            },
            {
                path: "/register",
                element: <Signup></Signup>,

            },
        ],
    },
    // {
    //     path: "/register",
    //     element: <Signup></Signup>,




    // },
]);

export default router;