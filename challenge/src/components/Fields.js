import React, { useState } from "react";

import fields from "../utils/fields.json";
import Form from "./Form";
import { uniqueId } from "lodash";

const Fields = () => {
    
    const [selectedField, setSelectedField] = useState(fields.fields[0].id)
    const [addedFields, setAddedFields] = useState([])

    const onChangeSelectedField = event => {
        setSelectedField(event.target.value)
    }

    const addField = event => {
        event.preventDefault()
        const list = addedFields.concat({id: uniqueId('fields') , field: selectedField})
        setAddedFields(list)
        console.log(addedFields)
        return addedFields
    }

    const removeField = (id) => {
        let arr = []
        
        addedFields.map( field => {
            if(field.id !== id) {
                arr.push(field)
            } 
        })
        setAddedFields(arr)
    }

    return(
        <>
            <div className="text-center">
                <h2 className="text-5xl my-4">Fields</h2>
                <h3 className="text-xl my-3">Select the field type that you want to add to form:</h3>
                <form onSubmit={addField} className="text-gray-900">
                    <select
                        value={selectedField}
                        onChange={onChangeSelectedField}
                    >
                        {
                            fields.fields&&
                            fields.fields.map((field, index) => (
                                <option key={index} value={field.id}>
                                    {field.label}
                                </option>
                            ))
                        }
                    </select>
                    <button className="bg-amber-300 px-4 rounded-md ml-3" type="submit">
                        Add
                    </button>
                    
                </form>
            </div>
            <Form addedFields={addedFields} fields={fields.fields} types={fields.types} removeField={removeField} />
        </>
    )

}

export default Fields