import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray-img'
import DescriptionWithLink from '../shared/DescriptionWithLink'
import Form from './form'
import { useParams, useNavigate } from 'react-router-dom'


async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({})

    let { id } = useParams()
    //Anteriormente usado o useHistory()
    let navigate = useNavigate()

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        })
    }, [])

    const goToPlanet = () =>{
        //histoy.push('/')
        navigate('/')
    }

    const addSatellites = (new_satellites) => {
        setSatellites([...satellites, new_satellites])
    }

    let title
    if (planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>

    return (
        <div>
            {title}
            <DescriptionWithLink
                description={planet.description}
                url={planet.url} />
            <GrayImg
                img_url={planet.img_url}
                grey={planet.grey} />
            <h4>Satélites</h4>
            <hr />
            <Form addSatellites={addSatellites} />
            <hr />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button onClick={goToPlanet}>Voltar a listagem</button>
        </div>
    )
}

export default Planet