import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideNav from "../components/dashboardSideNav";
import { connect } from "react-redux";
import { useEffect } from "react";
import UploadStatus from "../components/uploadStatus";
import { resetShowImageViewer, resetShowPdfReader, resetShowVideoPlayer } from "../store/uiActions";
import PDFReader from "../components/pdfReader";
import Modal from "../components/modal";
import VideoPlayer from "../components/videoPlayer";
import ImageViewer from "../components/imageViewer";

function Dashboard(props:any) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.auth.authenticated) {
            navigate('/')
        }
    }, [props.auth.authenticated])

    return (
        <div>

            {
                (props.ui.showPdfReader.show || props.ui.showVideoPlayer.show || props.ui.showImageViewer.show)
                && 
                <Modal />
            }

            {
                // <props className="ui showImageViewer show"></props>
                props.ui.showImageViewer.show &&
                <ImageViewer userId={props.auth.user.id} image={props.ui.showImageViewer.image} hideHandler={props.onResetShowImageViewer}/>
            }

            {
                props.ui.showPdfReader.show
                && 
                <PDFReader url={props.ui.showPdfReader.url} hideHandler={props.onResetShowPdfReader} />
            }

            {
                props.ui.showVideoPlayer.show 
                && 
                <VideoPlayer url={props.ui.showVideoPlayer.url} hideHandler={props.onResetShowVideoPlayer} />
            }

            {
                props.ui.uploadDuration 
                && 
                <div className="fixed h-full w-full z-[540] bg-modal">
                    <UploadStatus />
                </div>
            }

            {/* side section */}
            <DashboardSideNav />

            {/* main section */}
            <div className="ml-[300px] bg-bg-olive">
                <Outlet />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
        ui: state.ui
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onResetShowPdfReader: () => dispatch(resetShowPdfReader()),
        onResetShowVideoPlayer: () => dispatch(resetShowVideoPlayer()),
        onResetShowImageViewer: () => dispatch(resetShowImageViewer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);