import React, { useState, Fragment } from 'react';

const initialState = {
    name: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = e => {
        props.addSatellites(fields)
        e.preventDefault()
        setFields(initialState)
    }

    return <Fragment>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome do Satelite: </label>
                <p><input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange} />
                    <input type="submit" />
                </p>
            </div>

        </form>
    </Fragment>
}

export default Form