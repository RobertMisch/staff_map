import React, { useState } from 'react'

export default function SearchBar() {
    // const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (e) => {
        // console.log(e);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <div>
            <div></div>
            <input type="text" name="search" onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
}