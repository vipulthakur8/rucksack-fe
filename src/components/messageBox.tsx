import { useNavigate } from "react-router-dom"


export default function MessageBox(props: any) {

    let navigate = useNavigate()

    console.log("props in messagebox", props);
    // console.log("message from MessageBox")
    

    return(
        <div className="bg-white p-6 fixed rounded top-[50%] left-[50%] lg:w-1/4 h-fit transform -translate-x-[50%] -translate-y-[50%] z-[300]">
            <div className="w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 block mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p className="mt-[1rem] text-center">
                    {props.message}
                </p>
                <button 
                onClick={() => props.redirect.shouldRedirect ? navigate(props.redirect.path) : props.removeMessageBox()} 
                className="btn block mx-auto text-bg-olive bg-olive mt-[1rem]"
                >
                    Okay
                </button>
            </div>
        </div>
    )
}