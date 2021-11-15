import React, { Fragment } from 'react'
import './style.css'


const DescriptionWithLink = (props) => {
    if(!props.description) return null

    if(props.url){
    return (
        <Fragment>
            <p>{props.description}</p>
            <div><a href={props.url}>{props.url}</a></div>
        </Fragment>
    )
    } else{
        return(
            <Fragment>
                <p>
                    <u>{props.description}</u>
                </p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink