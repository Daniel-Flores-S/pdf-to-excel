import React from 'react';
import { ConvertPdfToExcel } from '../../data/api';

import { Container } from './styles';

const PdfToExcelConverter: React.FC = () => {

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return


    const response = await ConvertPdfToExcel(file)

    console.log(response)
    if (response.status === 200) {
      const newData = response?.data

      const url = window.URL.createObjectURL(new Blob([newData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.xlsx");
      document.body.appendChild(link);
      link.click();
      
      
    }
  }


  return (
    <Container>
      <input type="file" onChange={handleFile} />
    </Container>
    
  )
}

export default PdfToExcelConverter;