import { useRoutes } from 'react-router-dom'
import Home from './home/Home'
import SinglePage from './dynamicPage/SinglePage'
import Liked from './liked/Liked'
import Cart from './cart/Cart'

const RouteController = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'product/:id',
            element: <SinglePage />
        },
        {
            path: '/liked',
            element: <Liked />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        
    ])
}

export default RouteController