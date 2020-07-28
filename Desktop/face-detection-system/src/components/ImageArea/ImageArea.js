import React from 'react'

function ImageArea({imageUrl}) {
    return (
        <div className='imagearea'>
            <img alt="display url to detect" src={imageUrl} className="displayedImage" />
        </div>
    )
}

export default ImageArea
