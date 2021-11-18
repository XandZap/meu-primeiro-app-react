import React, { useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form/index";
import "./style.css";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();
    return data;
}

const Planets = () => {

    const [planets, setPlanet] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanet(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) =>{
        setPlanet([...planets, new_planet])
    }

    return (
        <div className="planets">
            <h3>Planet List</h3>
            <hr />
            <Form addPlanet = {addPlanet}/>

            <section className="planetConteiner">
                {planets.map((planet, index) => (
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

export default Planets;
