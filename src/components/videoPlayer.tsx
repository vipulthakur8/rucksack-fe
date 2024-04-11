
import ReactPlayer from "react-player";
import { connect } from "react-redux";

function VideoPlayer (props:any) {
    return (
        <div className="p-6 fixed z-[550] bg-black rounded-xl w-4/5 h-fit top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-between mb-[1rem]">
                <div>

                </div>
                <div onClick={props.hideHandler} className="btn btn-sm">
                    Close
                </div>
            </div>
            <ReactPlayer url={props.url} controls={true} width={"100%"} height={"750px"} />
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onResetPlayVideo: () => dispatch()
    }
}

export default connect(null, mapDispatchToProps)(VideoPlayer);