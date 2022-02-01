import React from "react";
import InputField from "./InputField";

const Form = ({addedFields, fields, types, removeField}) => {
    
    return(
        <form className="flex flex-col my-4 items-center">
        {
            addedFields&&
                addedFields.map((addedField, index) => {
                    const field = fields.filter(field => field.id === addedField.field)
                    return <InputField key={addedField.id} id={addedField.id} field={field} type={field[0].type} removeField={removeField} />
                    /*if(field[0].type === types.text){
                        return (
                            <div key={addedField.id}  className="my-2 text-gray-900">
                                <input  type={field[0].type}/>
                                <input type="button" value="x" onClick={() => removeField(addedField.id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
                            </div>
                        )
                    }
                    if(field[0].type === types.select) {
                        const options = field[0].options
                        return (
                            <div key={addedField.id}  className="my-2 text-gray-900">
                                <select>
                                    {
                                        options&&
                                            options.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))
                                    }
                                </select>
                                <input type="button" value="x" onClick={() => removeField(addedField.id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
                            </div>
                        )
                    }
                    if(field[0].type === types.radio) {
                        const options = field[0].options
                        return (
                            <div key={addedField.id}  className="flex my-2 text-gray-900">
                                <p>Gender:</p>

                                {
                                    options&&
                                        options.map((option, index) => (
                    
                                            <div key={index} className="text-white mr-2">
                                                <input id={addedField.id} type={field[0].type} value={option}/>
                                                <label for={addedField.id}>{option}</label>
                                            </div>
                                        ))
                                }
                                
                                <input type="button" value="x" onClick={() => removeField(addedField.id)} className="bg-red-700 ml-2 text-white px-4 rounded-lg" />
                            </div>
                        )
                    }*/
                })
        }
        </form>
    )
}

export default Form