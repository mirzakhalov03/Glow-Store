import { Navigate, useRoutes } from 'react-router-dom'
import Home from './home/Home'
import SinglePage from './dynamicPage/SinglePage'
import Liked from './liked/Liked'
import Cart from './cart/Cart'
import Login from './auth/login/Login'
// import Register from './auth/register/Register'
import Account from './profile/Account'
import Auth from './auth/Auth'
import Private from './Private/Private'
import PrivateLike from './privateLike/PrivateLike'
import PrivateCart from './privateCart/PrivateCart'

const RouteController = () => {
    
    const auth = localStorage.getItem("token" || "[]")


    return useRoutes([
        {
            path: '',
            element: <Home />
        },
        {
            path: 'product/:id',
            element: <SinglePage />
        },
        {
            path: 'liked',
            element: <PrivateLike/>,
            children: [
                {
                    path: "",
                    element: <Liked/>
                }
            ]
        },
        {
            path: "cart",
            element: <PrivateCart/>,
            children: [
                {
                    path: "",
                    element: <Cart/>
                }
            ]
        },
        {
            path: 'auth',
            element: auth ? <Navigate to="/account" /> : <Auth/>,
            children: [
                {
                    path: "",
                    element: <Login/>
                },
                // {
                //     path: "register",
                //     element: <Register/>
                // }

            ]
        },
        {
            path: 'account',
            element: <Private />,
            children: [
                {
                    path: "",
                    element: <Account/>,
                }
            ]
        }
        
    ])
}

export default RouteController