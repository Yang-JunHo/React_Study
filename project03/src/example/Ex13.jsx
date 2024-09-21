import React, { useRef } from 'react'

const Ex13 = () => {

  const pdfRef = useRef()

  const changePdf = () => {
    // console.log('pdfRef', pdfRef.current.src);
    if (pdfRef.current.src == "http://localhost:3000/pdf/pdfFile1.pdf") {
      pdfRef.current.src = "/pdf/pdfFile2.pdf"
    }else{
      pdfRef.current.src ="/pdf/pdfFile1.pdf"
    }
  }

  return (
    <div style={{ height : '100vh' }}>
      <button onClick={changePdf}>pdf변경하기</button>
      <iframe
        ref={pdfRef}
        src="/pdf/pdfFile1.pdf"
        width='100%'
        height='90%'
      ></iframe>
    </div>
  )
}

export default Ex13