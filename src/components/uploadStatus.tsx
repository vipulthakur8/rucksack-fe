import { connect } from "react-redux"
import { resetFileUpload, resetUploadDuration, resetUploadProgress } from "../store/uiActions"
import { resetFileUploaded } from "../store/userActions"
// import { useEffect } from "react"

function UploadStatus(props:any) {
    // useEffect(() => {
    //     if (props.user.fileUploaded || props.ui.uploadProgress == 100 || props.ui.uploadDuration) {
    //         props.onResetUploadDuration()
    //         props.onResetUploadProgress()
    //     }
    // }, [props.user.fileUploaded,props.ui.uploadProgress, props.ui.uploadDuration])

    const doneHandler = () => {
        props.onResetUploadDuration()
        props.onResetUploadProgress()
        props.onResetFileUploaded()
    }

    return (
        <div className="rounded-xl fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] p-6 w-1/4 h-fit z-[550] bg-white">
            <div>

            </div>
            <div>
                <p className="text-center text-[2em] font-bold text-green animate-pulse">
                    <span>{props.ui.uploadProgress.uploadedPercentage}</span> %
                </p>
            </div>
            <div>
                {
                    (!props.user.fileUploaded)
                    ?
                    <p className="text-center">
                        <span className="font-bold text-[1.2em]">File...</span>{props.ui.uploadProgress.fileName}
                    </p>
                    :
                    <p className="text-center">
                        <span className="font-bold text-[1.2em]">File...</span>{props.ui.uploadProgress.fileName} is successully uploaded
                    </p>
                }
              
            </div>
            <button onClick={doneHandler} className="btn block mx-auto mt-[1rem] bg-olive text-white text-[1.1em]">
                Done
            </button>
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