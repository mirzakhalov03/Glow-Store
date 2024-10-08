import { Navigate, Outlet } from "react-router-dom"


const Private = () => {
    const auth = localStorage.getItem("user" || "")

  return auth ? <Outlet /> : <Navigate to="/auth" />
}

export default Private
