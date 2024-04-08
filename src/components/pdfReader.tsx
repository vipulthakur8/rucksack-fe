

// import axios from "axios"
import { useEffect, useState } from "react"
import { Document, Page } from '@react-pdf/renderer'

export default function PDFReader (props:any) {

    const [pdf, setPdf] = useState<Blob>()

    useEffect(() => {
        const fetchPdf = async () => {
            const response = await fetch(props.url);
            const blob = await response.blob();
            console.log(blob);
            setPdf(blob);
        }

        fetchPdf()
    
    }, [props.url])

    console.log('pdf', pdf)

        return (
            <div className="font-inter fixed top-[50%] left-[50%] tranform -translate-x-[50%] -translate-y-[50%] z-[550] bg-white w-[90%] h-[90%] p-6">
                <div className="flex items-center justify-between">
                    <div>

                    </div>
                    <div onClick={props.hideHandler}>
                        <button className="btn btn-sm">Close</button>
                    </div>
                </div>
                <div>
                    {
                        pdf && (
                            <Document file={{data: pdf}} >
                                <Page size={'A4'} pageNumber={1} />
                            </Document>
                        )
                    }
                </div>
            </div>
        )
}