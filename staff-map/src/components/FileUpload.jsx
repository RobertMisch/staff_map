import React, { useState } from 'react';
import XLSX from 'xlsx'
import { useMap, useMapUpdate } from '../contexts/MapContext'

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const updateMap = useMapUpdate()
    const Map = useMap()
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    };

    const handleSubmission = (e) => {
        e.preventDefault()

        const promise = new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.readAsArrayBuffer(selectedFile)
            reader.onload = function (e) {
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
            updateMap(d)
        })
    };

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
}