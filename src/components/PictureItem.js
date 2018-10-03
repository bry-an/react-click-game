import React from 'react'
import './PictureItem.css'

const PictureItem  = props => {
    const imageId = props.id
    return (
        <img className = 'clicky-image' src={props.imageSrc} alt='clicky' data-id={props.dataId} onClick={() => props.pictureClickHandler(imageId)} />
    )
}
export default PictureItem