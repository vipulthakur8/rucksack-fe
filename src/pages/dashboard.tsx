import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideNav from "../components/dashboardSideNav";
import { connect } from "react-redux";
import { useEffect } from "react";
import UploadStatus from "../components/uploadStatus";

function Dashboard(props:any) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.auth.authenticated) {
            navigate('/')
        }
    }, [props.auth.authenticated])

    return (
        <div>

            {
                props.ui.uploadDuration 
                && 
                <div className="fixed h-full w-full z-[540] bg-modal">
                    <UploadStatus />
                </div>
            }

            {/* side section */}
            <DashboardSideNav />

            {/* main section */}
            <div className="ml-[300px] bg-bg-olive">
                <Outlet />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
        ui: state.ui
    }
}

export default connect(mapStateToProps, null)(Dashboard);