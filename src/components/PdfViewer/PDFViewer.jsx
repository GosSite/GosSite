import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
const PDFViewer = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.js',
            import.meta.url,
        ).toString();
    }, [])
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const handleAgree = () => {
        alert('Вы подтверждаете ознакомление с документом.');
        // Дополнительные действия по подтверждению ознакомления
    };

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

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 9999 }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <div style={{ height: '80vh', overflowY: 'scroll' }}>
                    <Document file="../../pdf/agreec.pdf" inputProps={{ style: { color: 'white' } }} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                <div style={{backgroundColor:"#fff"}}>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button style={{ padding: '5px 20px', fontSize: '20px', backgroundColor: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handlePrevious} disabled={pageNumber <= 1}>&lt;</button>
                <button style={{ padding: '5px 20px', fontSize: '20px', backgroundColor: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleNext} disabled={pageNumber >= numPages}>&gt;</button>
                </div>
                <div>
                </div>
                <button onClick={handleAgree} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Я ознакомлен
                </button>
            </div>
        </div>
    );
};

export default PDFViewer;
