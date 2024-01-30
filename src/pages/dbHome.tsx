// import { useState } from "react";
// import Modal from "../components/modal";
import { connect } from "react-redux"
import { setFileUpload, resetFileUpload } from "../store/uiActions"

function DbHome(props: any) {

    // const [showFileUpload, setShowFileUpload] = useState(true)

    return(
        <div className="mx-[2rem] px-[1rem] font-inter">

            {/* {
                showFileUpload
                &&
                <Modal />
            } */}

            <div className="flex items-center justify-between">
                <h1 className="md:my-[2rem] text-[18px] font-semibold">Dashboard</h1>
                <div className="flex items-center justify-between md:w-1/3 my-[2rem]">
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                    <div className="md:w-1/4 flex items-center justify-between">
                        <p>Hi, {'Vipul'}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className="divider my-[0]"></div> */}
            <div className="">
                {
                    false
                    ?
                    <div>
                    </div>
                    :
                    <div className="relative w-full h-[600px]">
                    <div className="w-fit p-6 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                        <h1 className="text-center mb-[1.5rem] text-[18px] font-semibold">You don't have any file</h1>
                        <button onClick={props.onSetFU} className="btn btn-lg bg-olive hover:bg-olive text-white block mx-auto">Upload file</button>
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state:any) => {
    return {
      ui: state.ui
    }
  }
  
const mapDispatchToProps = (dispatch:any) => {
    return {
      onSetFU: () => dispatch(setFileUpload()),
      onResetFU: () => dispatch(resetFileUpload())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(DbHome);

// export default DbHome;