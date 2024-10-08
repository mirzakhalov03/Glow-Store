import { Navigate, Outlet } from "react-router-dom"

const PrivateCart = () => {
    const auth = localStorage.getItem("user" || "")
    return auth ? <Outlet /> : <Navigate to="/auth"/>
}

export default PrivateCart