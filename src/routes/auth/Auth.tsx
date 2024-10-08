import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Outlet />
    </GoogleOAuthProvider>
  );
};

export default Auth;
