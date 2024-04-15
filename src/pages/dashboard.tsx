import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideNav from "../components/dashboardSideNav";
import { connect } from "react-redux";
import { useEffect } from "react";
import UploadStatus from "../components/uploadStatus";
import { resetShowImageViewer, resetShowMobileNav, resetShowPdfReader, resetShowVideoPlayer, setShowMobileNav } from "../store/uiActions";
import PDFReader from "../components/pdfReader";
import Modal from "../components/modal";
import VideoPlayer from "../components/videoPlayer";
import ImageViewer from "../components/imageViewer";
import MobileNav from '../components/mobileNav';

function Dashboard(props:any) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.auth.authenticated) {
            navigate('/')
        }
    }, [props.auth.authenticated])

    useEffect(() => {
        if (props.ui.mobileNav) {
            props.onResetShowMobileNav()
        }
    }, [])

    return (
        <div>

            {
                (props.ui.mobileNav || props.ui.showPdfReader.show || props.ui.showVideoPlayer.show || props.ui.showImageViewer.show)
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

            {
                props.ui.mobileNav &&
                <MobileNav />
            }

            {/* side section */}
            <DashboardSideNav />

            {/* main section */}
            <div className="md:ml-[300px] bg-bg-olive">
                <div className="block font-Inter fixed w-full top-[0rem] md:hidden bg-olive p-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <div>
                            <svg onClick={props.onSetShowMobileNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                            </svg>
                        </div>
                        <p className="text-white ml-3 font-bold">
                            Rucksack
                        </p>
                    </div>
                    <div>
                        {
                            props.auth.user.firstName &&
                            <p className="text-white">
                                Hi, {props.auth.user.firstName[0].toUpperCase()+props.auth.user.firstName.slice(1)}
                            </p>
                        }
                      
                    </div>
                </div>
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
        onResetShowImageViewer: () => dispatch(resetShowImageViewer()),
        onResetShowMobileNav: () => dispatch(resetShowMobileNav()),
        onSetShowMobileNav: () => dispatch(setShowMobileNav())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);