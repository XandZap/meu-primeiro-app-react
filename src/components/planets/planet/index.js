import React, { useState } from 'react'
import GrayImg from '../../shared/gray-img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import './style.css'

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            title_with_underline: props.title_with_underline,
            url: props.url,
            description: props.description,
            img_url: props.img_url,
            grey: props.grey,
            satellites: []
        };
    }

    componentDidMount() {
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }

    title_with_underline() {
        let title
        if (this.state.title_with_underline)
            title = <h4><u>{this.state.name}</u></h4>
        else
            title = <h4>{this.state.name}</h4>
        return title
    }

    render() {
        return (
            <div>
                {this.title_with_underline()}

                <DescriptionWithLink
                    description={this.state.description}
                    url={this.state.url} />
                <GrayImg
                    img_url={this.state.img_url}
                    grey={this.state.grey} />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) =>
                        <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                <hr />
            </div>
        )
    }
}

export default Planet