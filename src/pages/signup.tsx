import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import Header from "../components/header";
import { connect } from "react-redux";
import { signupRequest } from "../store/authActions";

const schema = yup.object({
    firstName: yup.string().trim().lowercase().required(),
    lastName: yup.string().trim().lowercase().required(),
    phone: yup.string().min(10).max(10).trim().required(),
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(8)
}).required()


function Signup(props:any) {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data: any) => {
        console.log(data);
        return props.onSignupRequest(data)
    }

    return (
        <div>
            <Header />
            <div className="font-inter rounded-xl w-[95%] lg:w-1/4 mx-auto border p-2 lg:p-3 mt-[15%] md:mt-[5%]">
                <h1 className="text-[20px] md:text-[27px] font-bold text-center mt-[0.5rem]">Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <input placeholder="First Name" {...register("firstName")} className="input w-full input-bordered mt-[1rem] w-full max-w-full" />
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.firstName?.message}</p>

                    <input placeholder="Last Name" {...register("lastName")} className="input input-bordered mt-[1rem] w-full max-w-full"/>
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.lastName?.message}</p>

                    <input placeholder="Phone" {...register("phone")} className="input input-bordered w-full mt-[1rem] max-w-full"/>
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.phone?.message}</p>

                    <input placeholder="Email" {...register("email")} className="input input-bordered w-full mt-[1rem] max-w-full"/>
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.email?.message}</p>

                    <input placeholder="Password" type="password" {...register("password")} className="input input-bordered w-full mt-[1rem] max-w-full" />
                    <p className="text-[15px] text-red ml-[0.5rem] mt-[0.3rem]">{errors.password?.message}</p>

                    <input type="submit" className="btn block w-full my-[1rem] bg-olive text-white text-[16px] md:text-[18px]" />
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onSignupRequest: (value:object) => dispatch(signupRequest(value))
    }
}

export default connect(null, mapDispatchToProps)(Signup);