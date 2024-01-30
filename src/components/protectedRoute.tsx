
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute(props: any) {
    return props.toll ? <Outlet /> : <Navigate to={props.redirectTo} />
}

export default ProtectedRoute;