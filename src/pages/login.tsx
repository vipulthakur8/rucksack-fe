import { useState } from "react";
import Header from "../components/header";

function Login() {

    const [loginCred, setLoginCred] = useState({
        email: '',
        password: ''
    });

    function changeHandler(e) {
        const {name, value} = e.target;
        setLoginCred({
            ...loginCred,
            [name]: value
        })
    }

    function submitHandler() {
        console.log('from submit handler')
    }

    // console.log("logincred", loginCred);

    return (
        <div>
            <Header />
            <div className="relative font-inter w-full h-[500px] sm:h-[600px]">
                <div className="border p-2 sm:p-3 shadow-2xl absolute w-[95%] sm:w-[80%] md:w-1/2 lg:w-1/4 h-fit top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                    <h1 className="text-[25px] text-olive text-center font-bold">Login</h1>
                    <input onChange={changeHandler} name="email" value={loginCred.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-full mt-[1.5rem]" />
                    <input onChange={changeHandler} name="password" value={loginCred.password} type="password" placeholder="Password" className="input input-bordered w-full max-w-full mt-[1rem]" />
                    <button onClick={submitHandler} className="btn block bg-olive text-[18px] text-white w-full mt-[1rem] mb-[0.5rem]">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;