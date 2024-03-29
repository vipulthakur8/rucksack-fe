// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Header from "../components/header";
import { useEffect } from "react";
import { loginRequest, resetSignedUp } from "../store/authActions";
import { connect } from "react-redux";
import { resetSuccess } from "../store/uiActions";
import { useNavigate } from "react-router-dom";


// interface LoginCred {
//     email: string | undefined,
//     password: string | undefined
// }

const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(8)
}).required()


function Login(props: any) {
    let navigate = useNavigate()
    useEffect(() => {
        props.onResetSuccess()
        props.onResetSignedUp(false);
    }, [])

    useEffect(() => {
        if (props.auth.authenticated) {
            navigate('/dashboard');
        }
    }, [props.auth.authenticated])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data: any) => {
        console.log(data);
        props.onLoginRequestHandler(data)
    }

    // function changeHandler(e) {
    //     const {name, value} = e.target;
    //     setLoginCred({
    //         ...loginCred,
    //         [name]: value
    //     })
    // }

    // function submitHandler() {
    //     console.log('from submit handler')
    // }

    // console.log("logincred", loginCred);

    return (
        <div>
            <Header />
            <div className="relative font-inter w-full h-[500px] sm:h-[600px]">
                <div className="border p-2 sm:p-3 shadow-2xl absolute w-[95%] sm:w-[80%] md:w-1/2 lg:w-1/4 h-fit top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                    <h1 className="text-[25px] text-olive text-center font-bold">Login</h1>
                    <input type="text"
                     {...register("email")}
                     placeholder="Email" className="input input-bordered w-full max-w-full mt-[1.5rem]" 
                     />
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.email?.message}</p>

                    <input type="password" 
                    {...register("password")}
                    placeholder="Password" className="input input-bordered w-full max-w-full mt-[1rem]" 
                    />
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.password?.message}</p>

                    <button onClick={handleSubmit(onSubmit)} className="btn block bg-olive hover:bg-olive text-[18px] text-white w-full mt-[1rem] mb-[0.5rem]">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onResetSignedUp: (value:boolean) => dispatch(resetSignedUp(value)),
        onResetSuccess: () => dispatch(resetSuccess()),
        onLoginRequestHandler: (value:object) => dispatch(loginRequest(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);