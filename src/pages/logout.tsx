import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetAuth } from "../store/authActions";


function Logout(props:any) {
    // console.log("ON the logout page")
    useEffect(() => {
        props.onResetAuth()
        localStorage.clear()
    }, [])

    return <Navigate to={'/'} />
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onResetAuth : () => dispatch(resetAuth())
    }
}

export default connect(null, mapDispatchToProps)(Logout);