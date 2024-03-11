import { connect } from "react-redux"
import { resetUploadDuration, resetUploadProgress } from "../store/uiActions"
import { resetFileUploaded } from "../store/userActions"
import { useEffect } from "react"

function UploadStatus(props:any) {
    useEffect(() => {
        if (props.ui.error.isError) {
            props.onResetUploadDuration()
            props.onResetUploadProgress()
        }
    }, [props.ui.error.isError])

    const doneHandler = () => {
        props.onResetUploadDuration()
        props.onResetUploadProgress()
        props.onResetFileUploaded()
    }

    return (
        <div className="rounded-xl font-inter fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] p-6 w-1/4 h-fit z-[550] bg-white">
            <div className="w-full h-fit mt-[0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 block mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
            </div>
            <div className="mt-[1.4rem]">
                <p className="text-center text-[1.8em] font-bold text-[#00f] animate-bounce">
                    <span>
                        {
                            props.ui.uploadProgress.uploadedPercentage < 5 
                            ?
                            0
                            :
                            (
                                props.ui.uploadProgress.uploadedPercentage > 5 && props.ui.uploadProgress.uploadedPercentage < 99
                            )
                            ?
                            props.ui.uploadProgress.uploadedPercentage-1
                            :
                            props.user.fileUploaded ?
                            100
                            :
                            props.ui.uploadProgress.uploadedPercentage-1
                        }
                    </span> %
                </p>
            </div>
            <div>
                {
                    (!props.user.fileUploaded)
                    ?
                    <p className="text-center text-wrap text-[1.3em]">
                        <span className="font-bold text-[1.2em]">{props.ui.uploadProgress.fileName}</span> is being uploaded
                    </p>
                    :
                    <p className="text-center text-wrap text-[1.2em]">
                        <span className="font-bold text-[1.2em]">{props.ui.uploadProgress.fileName}</span> is successully uploaded
                    </p>
                }
              
            </div>
            {
                !props.user.fileUploaded 
                ? 
                <button disabled={props.ui.uploadProgress.uploadedPercentage === 100 && true} onClick={doneHandler} className="btn block mx-auto mt-[1rem] bg-olive text-white text-[1.1em]">
                    Cancel
                </button>
                :
                <button onClick={doneHandler} className="btn block mx-auto mt-[1rem] bg-olive text-white text-[1.1em]">
                    Done
                </button>
            }
           
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        ui: state.ui,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onResetUploadDuration: () => dispatch(resetUploadDuration()),
        onResetUploadProgress: () => dispatch(resetUploadProgress()),
        onResetFileUploaded: () => dispatch(resetFileUploaded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadStatus)