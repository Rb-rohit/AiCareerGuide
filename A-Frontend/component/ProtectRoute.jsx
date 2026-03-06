import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../component/context/AuthContext";

export default function ProtectedRoute() {
    const { user } = useAuth();

  // Debug (remove later)
    // console.log("ProtectedRoute user:", user);
    //   console.log("AUTH USER:", user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
