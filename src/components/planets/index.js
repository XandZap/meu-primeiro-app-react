import React, { useState } from "react";
import Planet from "./planet";
import "./style.css";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();
    return data;
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
        };
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1];
        this.setState((state) => ({
            planets: [...this.state.planets, last_planet],
        }));
    };

    removeLast = () => {
        let new_planets = [...this.state.planets];
        new_planets.pop();
        this.setState((state) => ({
            planets: new_planets,
        }));
    };

    render() {
        return (
            <div className="planets">
                <h3>Planet List</h3>
                <hr />
                <section className="button">
                    <button onClick={this.removeLast}>Remover Ultimo</button>
                    <button onClick={this.duplicateLastPlanet}>
                        Duplicar Ultimo Planeta
                    </button>
                <hr/>
                </section>
                <section className="planetConteiner">
                    {this.state.planets.map((planet, index) => (
                        <Planet
                            id={planet.id}
                            name={planet.name}
                            img_url={planet.img_url}
                            description={planet.description}
                            url={planet.link}
                            title_with_underline={true}
                            key={index}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default Planets;
