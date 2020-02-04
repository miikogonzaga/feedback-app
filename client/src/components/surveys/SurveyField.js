import React from 'react'
import { getFormMeta } from 'redux-form'

export default ({ input, label, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            <div className="error">
                {touched && error}
            </div>
        </div>
    )
}