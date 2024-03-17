import { useState } from "react";
// import Modal from "../components/modal";
import { connect } from "react-redux"
import { setFileUpload, resetFileUpload } from "../store/uiActions"
import { fetchDashboardContent } from "../store/genActions"
import { useEffect } from "react"

import { URL } from "../config/backend_info";

import ImageViewer from "../components/imageViewer"
import Modal from "../components/modal";
import imageIcon from '../assets/imageIcon.svg';

function DbHome(props: any) {

    const [showImage, setShowImage] = useState({
        show: false,
        image: ''
    })

    useEffect(() => {
        if (!props.user.fileUploaded) {
            props.onFetchDashboardContent({id: props.auth.user.id})
        }
    }, [props.user.fileUploaded])


    return(
        <div className="mx-[2rem] px-[1rem] font-inter">

            {
                showImage.show
                &&
                <Modal />
            }

            {
                showImage.show
                &&
                <ImageViewer userId={props.auth.user.id} image={showImage.image} hideHandler={() => setShowImage({show: false, image: ''})}/>

            }
            
            <div className="flex items-center justify-between">
                <h1 className="md:my-[2rem] text-[18px] font-semibold">Dashboard</h1>
                <div className="flex items-center justify-between md:w-1/3 my-[2rem]">
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                    <div className="md:w-1/4 flex items-center justify-between">
                        <p>Hi, {props.auth.user.firstName ? props.auth.user.firstName.toUpperCase() : 'User'}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className="divider my-[0]"></div> */}
            <div className="">
                {
                    (props.gen.images.length > 0)
                    ?
                    <div>
                        {
                            props.gen.images.length > 0 
                            &&
                            <div>
                                <p className="text-[1.5em] font-bold font-inter mt-[1rem]">Images</p>
                                <div className="grid grid-cols-10 mt-[0.5rem]">
                                    {
                                        props.gen.images.map((item:any) => {
                                            // return <p key={item._id}>{item.image}</p>
                                            // return <ImageViewer key={item._id} userId={props.auth.user.id} image={item.image} />]
                                            return (
                                            <div key={item._id} className="w-fit h-fit p-3 hover:cursor-pointer">
                                                <img onClick={() => setShowImage({show: true, image: item.image})} src={imageIcon} className="w-[80px] block mx-auto" />
                                                <p className="text-center mt-[0.5rem]">{item.image.split('+')[1]}</p>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        }
                      
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
      ui: state.ui,
      auth: state.auth,
      user: state.user,
      gen: state.gen
    }
  }
  
const mapDispatchToProps = (dispatch:any) => {
    return {
      onSetFU: () => dispatch(setFileUpload()),
      onResetFU: () => dispatch(resetFileUpload()),
      onFetchDashboardContent: (value:Object) => dispatch(fetchDashboardContent(value))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(DbHome);

// export default DbHome;