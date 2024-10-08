import { Navigate, Outlet } from "react-router-dom"


const PrivateLike = () => {
    const auth = localStorage.getItem("user" || "")
    return auth ? <Outlet /> : <Navigate to="/auth"/>
}

export default PrivateLike