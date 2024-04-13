

// import axios from "axios"
import { useEffect, useState } from "react"
// import { Document, Page } from 'react-pdf'
// import { Document, Page } from '@react-pdf/renderer';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFReader (props:any) {

    const [pdf, setPdf] = useState<Blob>()
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const fetchPdf = async () => {
            const response = await fetch(props.url);
            const blob = await response.blob();
            console.log("blob", blob);
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
                <div className="pt-5">
                    {
                        pdf && (
                            <Worker 
                            workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"
                            >
                                <div style={{
                                      border: '1px solid rgba(0, 0, 0, 0.3)',
                                      height: '750px',
                                }}>
                                    <Viewer 
                                    fileUrl={URL.createObjectURL(pdf)} 
                                    />
                                </div>
                              
                            </Worker>
                        )
                    }

                </div>
            </div>
        )
}






// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// export default function PdfReader() {
//   const [numPages, setNumPages] = useState<number>();
//   const [pageNumber, setPageNumber] = useState<number>(1);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }