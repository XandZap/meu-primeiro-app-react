import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray-img'
import DescriptionWithLink from '../shared/DescriptionWithLink'
import Form from './form'

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellites = (new_satellites) =>{
        setSatellites([...satellites, new_satellites])
    }

    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            {title}
            <DescriptionWithLink
                description={props.description}
                url={props.url} />
            <GrayImg
                img_url={props.img_url}
                grey={props.grey} />
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellites = {addSatellites}/>
            <hr/>
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
        </div>
    )
}

export default Planet