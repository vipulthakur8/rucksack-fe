import { useState } from "react";


function FileUpload(props:any) {

    // const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState('')

    const changeHandler = (e:any) => {
        setFile(e.target.files[0])
        setFileType(e.target.files[0].type)
    }

    const submitHandler = () => {
        console.log(file)
    }

    // console.log("[File in fileupload]", fileType)
    return (
        <div className="font-inter bg-white z-[250] lg:w-[600px]  p-2 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-between p-2">
                <div>

                </div>
                <div onClick={props.closeSection} className="hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="p-6">
                <input onChange={changeHandler} type="file" className="file-input file-input-bordered file-input-olive w-full max-w-full" />
            </div>

            {
                fileType.split('/')[0] === 'image'
                &&
                <div className="p-6">
                    {
                        file
                        &&
                        <img src={URL.createObjectURL(file)} className="block mx-auto"/>
                    }
                </div>
            }
            
            {
                fileType.split('/')[0] === 'video'
                &&
                <div className="p-6">
                {
                    file
                    &&
                    <video width="500" height="300" className="block mx-auto" controls>
                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                    {/* You can add additional source elements for different video formats */}
                    Your browser does not support the video tag.
                        </video>
                }
              
              </div>
            }
            

            <div>
                <button onClick={submitHandler} className="btn btn-md block mx-auto mb-[1rem] text-[16px] text-olive bg-bg-olive hover:bg-bg-olive">
                    Upload
                </button>
            </div>
        </div>
    )
}

export default FileUpload;