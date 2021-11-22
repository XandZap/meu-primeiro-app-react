import React from 'react'
import GrayImg from '../../shared/gray-img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import './style.css'
import { Link } from 'react-router-dom'

const Planet = (props) => {

    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink
                description={props.description}
                url={props.url} />
            <GrayImg
                img_url={props.img_url}
                grey={props.grey} />
            
            <hr />
        </div>
    )
}

export default Planet