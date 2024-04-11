
import { connect } from "react-redux"
import { fetchAllUserVideos } from "../store/genActions"
import { useEffect } from "react"
import { setShowVideoPlayer } from "../store/uiActions"
import videoFile from '../assets/video.svg';
import { URL } from "../config/backend_info";

function DbVideo(props: any) {

    useEffect(() => {
        console.log("before fetching videos in useEffect")
        props.onFetchAllVideos(props.auth.user.id);
        console.log("after fetching videos in useEffect")
    }, [])

    return (
        <div className="w-full h-[100vh]">
            <div className="md:pt-[2rem]">
                <h1 className="md:py-1 md:px-6 font-inter text-[30px] font-bold">
                    Videos
                </h1>
            </div>
            <div className="mt-[0.5rem]">
                    <div className="grid grid-cols-10 mt-[0.5rem]">
                        {                                    
                                        props.gen.allUserVideos.map((item:any) => {
                                            return (
                                                <div key={item._id} className="w-[120px] h-fit p-3 hover:cursor-pointer">
                                                    <img 
                                                    onClick={() => props.onSetShowVideoPlayer({show: true, url: `${URL}/gen/user/videos/${item.videoName}`})} 
                                                    className="w-[80px] block mx-auto" 
                                                    src={videoFile} alt="video file"
                                                    />
                                                    <p className="text-center mt-[0.5rem] wrap">{item.videoName.split('+')[1].slice(0,8)}...</p>
                                                </div>
                                            )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        gen: state.gen,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFetchAllVideos: (value: string) => dispatch(fetchAllUserVideos(value)),
        onSetShowVideoPlayer: (value: object) => dispatch(setShowVideoPlayer(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DbVideo);










