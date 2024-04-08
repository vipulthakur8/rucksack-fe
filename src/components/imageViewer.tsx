
import { URL } from "../config/backend_info"

export default function ImageViewer({userId, image, hideHandler}) {
    // console.log(`${image} in ImageViewer`, URL)
    return (
        <div className="fixed bg-white p-3 z-[500] md:w-2/3 md:h-2/3 top-[50%] left-[50%] tranform -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-between">
                <div>

                </div>
                <div>
                    <svg onClick={hideHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
          
            <div className="mt-[1rem] px-3 pb-3">
                <img 
                className="block mx-auto w-[750px] h-[500px]"
                // top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]" 
                src={`${URL}/gen/user/images/${userId}/${image}`} 
                alt="image" />
            </div>
        </div>
    )
}