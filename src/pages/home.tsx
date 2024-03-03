import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useEffect } from "react";
import { connect } from "react-redux";

function Home(props:any) {
    let navigate = useNavigate()
    useEffect(() => {
        if (props.auth.authenticated) {
            navigate('/dashboard');
        }
    }, [])

    return (
        <div className="font-inter">
            <Header />
            <div className="w-full h-[500px] md:h-[700px]">
                <div className="h-full w-[95%] md:w-[85%] mx-auto grid md:grid-cols-2 md:gap-10">
                    <div className="md:self-center order-2 md:order-1">
                        <h1 className="text-[30px] text-center md:text-left md:text-[60px] leading-[1.2] font-mono font-bold">
                            Store your confidential documents, images, and videos.
                        </h1>
                        <div className="mt-[2rem] w-fit mx-auto md:full md:ml-0">
                            <Link to={'/login'} className="btn btn-sm md:btn-md bg-olive text-white text-[16px] md:text-[18px] hover:text-[22px] hover:bg-olive">
                                Login
                            </Link>
                            <Link to={'/signup'} className="btn btn-sm md:btn-md bg-olive text-[16px] md:text-[18px] text-white ml-[1rem] hover:text-[22px] hover:bg-olive">
                                Sign up
                            </Link>
                        </div>
                    </div>

                    <div className="md:self-center order-1 md:order-2">
                       <img className="w-[70%] md:w-full block mx-auto" src="/home-image.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (disptach:any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);