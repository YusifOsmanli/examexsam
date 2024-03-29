import SiteRoot from "../SiteRoot"
import Add from "../pages/Add"
import Basket from "../pages/Basket"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import Wishlist from "../pages/Wishlist"

const ROOT = [{
    path: '',
    element: <SiteRoot />,
    children: [{
        path: '/',
        element: <Home />
    },
    {
        path: '/Basket',
        element: <Basket/>
    },
    {
        path: '/Wishlist',
        element: <Wishlist/>
    },
    {
        path: '/:id',
        element: <Detail/>
    },
    {
        path: '/Add',
        element: <Add/>
    },
]
}]

export default ROOT