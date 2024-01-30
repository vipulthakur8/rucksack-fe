import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/dashboardSideNav";

function Dashboard() {
    return (
        <div>
            {/* side section */}
            <DashboardSideNav />

            {/* main section */}
            <div className="ml-[300px] bg-bg-olive h-[100vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;