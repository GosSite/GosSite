import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import './PDFViewer.css'
const PDFViewer = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    }, []);

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [isVisibleDoc, setIsVisibleDoc] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleAgree = async () => {
        await localStorage.setItem('hasAgreed', true);
        setIsVisibleDoc(false);
    };

    const handleDocVisible = async () => {
        const isConfirmed = await localStorage.getItem('hasAgreed');
        setIsVisibleDoc(isConfirmed ? false : true);
    }
    const handlePrevious = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNext = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    useEffect(()=>{
        handleDocVisible()
    })
    return (
        <>
            {isVisibleDoc && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 9999,
                    }}
                >
                    <div className='doc'>
                        <div className='pdfDoc'>
                            <Document
                                file="pdf/agreec.pdf"
                                inputProps={{ style: { color: 'white' } }}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div>
                        <div style={{ width: '100%', backgroundColor: '#fff' }}>
                            <p>
                                Page {pageNumber} of {numPages}
                            </p>
                            <button
                                style={{
                                    padding: '5px 20px',
                                    fontSize: '20px',
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={handlePrevious}
                                disabled={pageNumber <= 1}
                            >
                                &lt;
                            </button>
                            <button
                                style={{
                                    padding: '5px 20px',
                                    fontSize: '20px',
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={handleNext}
                                disabled={pageNumber >= numPages}
                            >
                                &gt;
                            </button>
                        </div>
                        <div></div>
                        <button
                            onClick={handleAgree}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                fontSize: '16px',
                                backgroundColor: '#007bff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Я ознакомлен
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PDFViewer;
