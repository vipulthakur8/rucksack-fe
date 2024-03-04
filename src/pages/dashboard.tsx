import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideNav from "../components/dashboardSideNav";
import { connect } from "react-redux";
import { useEffect } from "react";

function Dashboard(props:any) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.auth.authenticated) {
            navigate('/')
        }
    }, [props.auth.authenticated])

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

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Dashboard);