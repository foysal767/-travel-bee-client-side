import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllService from "../../Pages/AllService/AllService";
import Blogs from "../../Pages/Blogs/Blogs";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/service',
                element: <AllService></AllService>
            },
            {
                path: '/service/:id',
            loader: ({params}) => fetch(`http://localhost:5000/all-service/${params.id}`),
            element: <Details></Details>
            }
        ]
    }
])

export default router;