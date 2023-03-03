import axios from "axios";

export const ConvertPdfToExcel = async (pdfFile: File) => {
    const formData = new FormData();
    formData.append('file', pdfFile);

    return await axios(
        `${process.env.REACT_APP_PDFTABLES_API_KEY}/convert`,
        {
            method: 'POST',
            data: formData,
            responseType: "blob"
        },
    );

}