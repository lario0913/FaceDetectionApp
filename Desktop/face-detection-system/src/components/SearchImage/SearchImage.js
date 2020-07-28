import React from 'react'

function SearchImage({onInputChange, onButtonClicked}) {
    return (
        <div className='searchimage'>
            <h3>Input Image Url or Upload images for face detection</h3>

            <div className="input">
                <input type='text' className='inputbox' onChange={onInputChange} />
                <button className="searchbox" onClick={onButtonClicked}>Search Image</button>
            </div>
            
        </div>
    )
}

export default SearchImage
