
function FileUpload(props:any) {
    return (
        <div className="font-inter fixed top-[50%] left-[50%] transfrom -translate-x-[50%] -translate-y-[50%] bg-white z-[250] lg:w-[600px] p-2">
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
                <input type="file" className="file-input file-input-bordered file-input-olive w-full max-w-full" />
            </div>

            <div>
                <button className="btn btn-md block mx-auto mb-[1rem] text-[16px] text-olive bg-bg-olive hover:bg-bg-olive">
                    Upload
                </button>
            </div>
        </div>
    )
}

export default FileUpload;