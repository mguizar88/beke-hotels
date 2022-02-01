import React, { useState } from "react";

import fields from "../utils/fields.json"

const InputField = ({id, field, type, removeField}) => {
    
    const [selectedOption, setSelectedOption] = useState()

    const onValueChange = event => {
        setSelectedOption(event.target.value)
    }
    
    const types = fields.types

    if(type === types.text){
        return (
            <div className="my-2 text-gray-900">
                <input  type={field[0].type}/>
                <input type="button" value="x" onClick={() => removeField(id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
            </div>
        )
    }
    if(field[0].type === types.select) {
        const options = field[0].options
        return (
            <div className="my-2 text-gray-900">
                <select>
                    {
                        options&&
                            options.map((option, index) => (
                                <option key={index}>{option}</option>
                            ))
                    }
                </select>
                <input type="button" value="x" onClick={() => removeField(id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
            </div>
        )
    }
    if(field[0].type === types.radio) {
        const options = field[0].options
        return (
            <div className="flex my-2 text-gray-900">
                <p>Gender:</p>

                {
                    options&&
                        options.map((option, index) => (
    
                            <div key={index} className="text-white mr-2">
                                <input 
                                    id={id} 
                                    type={field[0].type} 
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={onValueChange}
                                />
                                <label htmlFor={id}>{option}</label>
                            </div>
                        ))
                }
                
                <input type="button" value="x" onClick={() => removeField(id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
            </div>
        )
    }
}

export default InputField