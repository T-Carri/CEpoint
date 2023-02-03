import React, {useRef} from 'react'
import { Button} from 'react-bootstrap'
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import './QR.css'
export const QR = ({dato}) => {
    const qrRef = useRef(null);

    const handleDownload = () => {
        html2canvas(qrRef.current).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'QRCode.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      };

  


      const handlePrint = () => {
        const printWindow = window.open("", "", "height=400,width=600");
        printWindow.document.write(`
          <html>
            <head>
              <title>QR Code</title>
              <style>
                #qr-code-print {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                }
              </style>
            </head>
            <body>
              <div id="qr-code-print">
                ${qrRef.current.innerHTML}
              </div>
            </body>
          </html>
        `);
    
        printWindow.print();
       /*  printWindow.close(); */
      };

  return (
        

<>
<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }} ref={qrRef}>
<QRCode
    size={100}
    style={{ height: "auto", maxWidth: "60%", width: "60%" }}
    value={dato}
    viewBox={`0 0 256 256`}
    />
</div>
<Button variant='dark' onClick={handlePrint}>Imprimir QR</Button>
</>

  )
}
