import React from 'react'
import './style.css'

const GrayImg = (props) =>{
    return (
        <img className={props.grey  ? 'grey-img' : 'color-img'} src={props.img_url}/>
    )
}

export default GrayImg