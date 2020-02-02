import React from 'react'
import { getFormMeta } from 'redux-form'

export default ({ input, label, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            <div style={{ marginBottom: 20 }}>
                {touched && error}
            </div>
        </div>
    )
}