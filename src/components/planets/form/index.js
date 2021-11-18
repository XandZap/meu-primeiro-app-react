import React, { useState, Fragment } from "react";

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = e => {
        props.addPlanet(fields)
        e.preventDefault()
        setFields(initialState)
    }

    return <Fragment>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange} />
            </div>
            <div>
                <label htmlFor="description">Descrição: </label>
                <textarea cols="30" rows="10" type="text" id="description" name="description" value={fields.description} onChange={handleFieldsChange} />
            </div>
            <div>
                <label htmlFor="link">Link: </label>
                <input type="text" id="link" name="link" value={fields.link} onChange={handleFieldsChange} />
            </div>
            <div>
                <label htmlFor="img_url">Url da Imagem: </label>
                <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
            </div>
            <input type="submit" />
        </form>
    </Fragment>;
};

export default Form;
