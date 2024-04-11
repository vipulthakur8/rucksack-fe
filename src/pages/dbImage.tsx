import { connect } from "react-redux";
import { fetchAllImages } from "../store/genActions";
import { useEffect } from "react";

import { URL } from "../config/backend_info";
import { setShowImageViewer } from "../store/uiActions";

function DbImage(props: any) {
    useEffect(() => {
        if (!props.user.fileUploaded) {
            props.onFetchAllImages(props.auth.user.id);
        }
    }, [props.user.fileUploaded])

    return (
        <div className="w-full h-[100vh]">
            <div className="md:pt-[2rem] md:pt-[0.5rem]">
                <h1 className="md:py-1 md:px-6 font-inter text-[30px] font-bold">
                    Images
                </h1>
            </div>
            {/* onClick={() => setShowImage({show: true, image: item.image})} */}
            <div className="h-fit w-full">
                    {
                        props.gen.allUserImages.length > 0 
                        ?
                        <div className="py-3 px-[1.5rem] ">
                            <div className="grid grid-cols-9 gap-10 mt-[0.5rem]">
                                {
                                    props.gen.allUserImages.map((item:any) => {
                                        return (
                                        <div key={item._id} className="bg-white w-fit h-fit p-3 hover:cursor-pointer">
                                            <img 
                                            src={`${URL}/gen/user/images/${props.auth.user.id}/${item.image}`} 
                                            onClick={() => props.onSetShowImageViewer({show: true, image: `${item.image}`})}
                                            className="w-[80px] h-[80px] block mx-auto" 
                                            />
                                            <p className="text-center mt-[0.5rem]">{item.image.split('+')[0]}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <div className="">
                            <p className="text-[1em]">
                                You have no images
                            </p>
                        </div>
                    }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        gen: state.gen,
        user: state.user,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFetchAllImages: (value: string) => dispatch(fetchAllImages(value)),
        onSetShowImageViewer: (value: any) => dispatch(setShowImageViewer(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DbImage);