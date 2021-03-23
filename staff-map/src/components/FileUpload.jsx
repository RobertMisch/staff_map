import React, { useState } from 'react';
import { useMap, useMapUpdate} from '../contexts/MapContext'

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const updateMap= useMapUpdate()
    const Map = useMap()
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    };

    const handleSubmission = (e) => {
        e.preventDefault()
        // useMapUpdate(selectedFile)
        updateMap(selectedFile)
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