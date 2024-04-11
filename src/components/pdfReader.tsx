

// import axios from "axios"
import { useEffect, useState } from "react"
// import { Document, Page } from 'react-pdf'
import { Document, Page } from '@react-pdf/renderer';

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
                <div>
                    {
                        pdf && (
                            // <Document file={{data: pdf}} >
                            //     <Page size={'A4'} pageNumber={1} />
                            // </Document>
                            // <object
                            //     width={'100%'}
                            //     height={'100%'}
                            //     type="applicaiont/pdf"
                            //     data={URL.createObjectURL(pdf)}

                            // >
                            //     <p className="text-center mt-[10rem] text-red">
                            //         PDF viewer not available. Please download the PDF to view it.
                            //     </p>
                            // </object>
                            <embed
                            src={URL.createObjectURL(pdf)}
                            type="application/pdf"
                            width="100%"
                            height="500px"
                          />
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