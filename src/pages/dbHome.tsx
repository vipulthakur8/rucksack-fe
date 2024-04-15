import { useState } from "react";
// import Modal from "../components/modal";
import { connect } from "react-redux"
import { setFileUpload, resetFileUpload, setShowPdfReader, setShowVideoPlayer, setShowImageViewer } from "../store/uiActions"
import { fetchDashboardContent } from "../store/genActions"
import { useEffect } from "react"

import { URL } from "../config/backend_info";

import ImageViewer from "../components/imageViewer"
import Modal from "../components/modal";
// import imageIcon from '../assets/imageIcon.svg';
import pdfFile from '../assets/pdf.svg';
import videoFile from '../assets/video.svg';
import otherFile from '../assets/otherFile.svg';
import { useNavigate } from "react-router-dom";

const LIMIT = 0;

function DbHome(props: any) {

    const navigate = useNavigate();

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
        <div className="md:mx-[2rem] px-[1rem] h-full font-inter bg-bg-olive">

            {/* {
                showImage.show
                &&
                <Modal />
            }

            {
                showImage.show
                &&
                <ImageViewer userId={props.auth.user.id} image={showImage.image} hideHandler={() => setShowImage({show: false, image: ''})}/>

            } */}
            
            <div className="flex items-center justify-between">
                <h1 className="my-[1rem] md:my-[2rem] text-[18px] font-semibold">Dashboard</h1>
                <div className="flex items-center justify-between md:w-1/3 my-[2rem]">
                    <input type="text" placeholder="Search" className="input hidden md:block input-bordered w-full max-w-xs" />
                    <div className="md:w-1/4 flex items-center justify-between">
                        <p>Hi, {props.auth.user.firstName ? props.auth.user.firstName.toUpperCase() : 'User'}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className="divider my-[0]"></div> */}
            <div className="h-fit">
                {
                    (props.gen.images.length > 0)
                    ?
                    <div>
                        {/* Document section */}
                        {
                            props.gen.documents.length > 0
                            &&
                            <div className="p-3 md:p-6 bg-white">
                                <p className="text-[1em] md:text-[1.5em] font-bold font-inter mt-[0rem]">Documents</p>
                                <div className="grid grid-cols-3 md:grid-cols-10 mt-[0.3rem] md:mt-[0.5rem]">
                                    {
                                        props.gen.documents.map((item:any) => {
                                            return (
                                                <div key={item._id} className="w-[80px] md:w-[120px] h-fit p-3 hover:cursor-pointer">
                                                    <img onClick={() => props.onSetShowPdfReader({show:true, url: `${URL}/gen/user/document/${item.appName}`})} className="w-[40px] md:w-[80px] block mx-auto" src={pdfFile} alt="document pdf file"/>
                                                    <p className="text-center text-[0.8em] md:text-[1rem] mt-[0.5rem] wrap">{item.appName.split('+')[1].slice(0,8)}...</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    props.gen.documents.length >= LIMIT 
                                    &&
                                    <div className="mt-[0.3rem] md:mt-[1rem]">
                                        <button onClick={() => navigate('/dashboard/documents')} className="bg-olive p-2 rounded-xl text-white md:btn text-[0.5em] md:btn-sm ">See more</button>
                                    </div>
                                }
                            </div>
                        }

                        {/* Image section */}
                        {
                            props.gen.images.length > 0 
                            &&
                            <div className="p-3 md:p-6 bg-white mt-[1rem] md:mt-[2rem]">
                                <p className="text-[1em] md:text-[1.5em] font-bold font-inter mt-[0rem]">Images</p>
                                <div className="grid grid-cols-4 gap-3 md:gap-5 md:grid-cols-10 mt-[0.3rem] md:mt-[0.5rem]">
                                    {
                                        props.gen.images.map((item:any) => {
                                            return (
                                            <div key={item._id} className="w-fit self-stretch h-fit p-3 hover:cursor-pointer">
                                                <img 
                                                onClick={() => props.onSetShowImageViewer({show: true, image: item.image})}
                                                src={`${URL}/gen/user/images/${props.auth.user.id}/${item.image}`} 
                                                className="w-[40px] md:w-[80px] h-[40px] md:h-[80px] block mx-auto" 
                                                />
                                                <p className="text-center text-[0.5em] md:text-[1em] mt-[0.5rem]">{item.image.split('+')[0]}</p>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    props.gen.images.length >= LIMIT 
                                    &&
                                    <div className="mt-[0.3rem] md:mt-[1rem]">
                                        <button onClick={() => navigate('/dashboard/images')} className="bg-olive p-2 rounded-xl text-white md:btn text-[0.5em] md:btn-sm">See more</button>
                                    </div>
                                }
                            </div>

                        }

                        {/* Video section */}
                        {
                            props.gen.videos.length > 0
                            &&
                            <div className="p-3 md:p-6 bg-white mt-[1rem] md:mt-[2rem]">
                                <p className="text-[1rem] text-[1.5em] font-bold font-inter mt-[0rem]">Videos</p>
                                <div className="grid grid-cols-3 md:grid-cols-10 mt-[0.5rem]">
                                    {
                                        props.gen.videos.map((item:any) => {
                                            return (
                                                <div key={item._id} className="w-[80px] md:w-[120px] h-fit p-3 hover:cursor-pointer">
                                                    <img onClick={() => props.onSetShowVideoPlayer({show: true, url: `${URL}/gen/user/videos/${item.videoName}`})} className="w-[40px] h-[40px] md:w-[80px] block mx-auto" src={videoFile} alt="document pdf file"/>
                                                    <p className="text-center text-[0.5em] md:text-[1em] mt-[0.5rem] wrap">{item.videoName.split('+')[1].slice(0,8)}...</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    props.gen.images.length >= LIMIT 
                                    &&
                                    <div className="mt-[0.3rem] md:mt-[1rem]">
                                        <button onClick={() => navigate('/dashboard/videos')} className="bg-olive p-2 rounded-xl text-white md:btn text-[0.5em] md:btn-sm">See more</button>
                                    </div>
                                }
                            </div>
                        }


                        {/* Others Files section */}
                        {/* {
                            props.gen.others.length > 0
                            &&
                            <div className="p-6 bg-white my-[2rem]">
                                <p className="text-[1.5em] font-bold font-inter mt-[0rem]">Other Files</p>
                                <div className="grid grid-cols-10 mt-[0.5rem]">
                                    {
                                        props.gen.others.map((item:any) => {
                                            return (
                                                <div key={item._id} className="w-[120px] h-fit p-3 hover:cursor-pointer">
                                                    <img className="w-[80px] block mx-auto" src={otherFile} alt="document pdf file"/>
                                                    <p className="text-center mt-[0.5rem] wrap">{item.otherName ? item.otherName.split('+')[1].slice(0,8) : item.appName.split('+')[1].slice(0,8)}...</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    props.gen.images.length >= LIMIT 
                                    &&
                                    <div className="mt-[1rem]">
                                        <button onClick={() => navigate('/dashboard/others')} className="btn btn-sm">See more</button>
                                    </div>
                                }
                            </div>
                        } */}
                      
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
            <div className="w-full h-[50px] bg-bg-olive">

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
      onFetchDashboardContent: (value:Object) => dispatch(fetchDashboardContent(value)),
      onSetShowPdfReader: (value: object) => dispatch(setShowPdfReader(value)),
      onSetShowVideoPlayer: (value:object) => dispatch(setShowVideoPlayer(value)),
      onSetShowImageViewer: (value:object) => dispatch(setShowImageViewer(value))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(DbHome);

// export default DbHome;