import React from 'react'
import { getFormMeta } from 'redux-form'

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </div>
    )
}