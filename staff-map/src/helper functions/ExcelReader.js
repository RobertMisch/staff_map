import React from 'react';
import XLSX from 'xlsx'


export default function excel_to_json(selectedFile){
    const promise = new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsArrayBuffer(selectedFile)
        reader.onload = function (e) {
            // The file's text will be printed here
            const bufferArray = e.target.result
            const work_book = XLSX.read(bufferArray, { type: 'buffer' })
            const sheet_name = work_book.SheetNames[0]
            const sheet = work_book.Sheets[sheet_name]
            const data = XLSX.utils.sheet_to_json(sheet)
            resolve(data)
        }
        reader.onerror=((error)=>{
            reject(error)
        })
    })
    promise.then((d)=>{
        console.log(d)
        return d
    })
}