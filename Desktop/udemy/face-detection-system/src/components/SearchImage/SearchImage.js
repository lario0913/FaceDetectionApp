import React from 'react'

function SearchImage() {
    return (
        <div className='searchimage'>
            <h3>Input Image Url or Upload images for face detection</h3>

            <div className="input">
                <input type='text' className='inputbox'/>
                <button className="searchbox">Search Image</button>
            </div>
            
        </div>
    )
}

export default SearchImage
