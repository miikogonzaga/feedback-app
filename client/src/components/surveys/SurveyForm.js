import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

// Form Users See
class SurveyForm extends Component {
    renderFields() {
        return formFields.map(field => {
            return (
                <Field
                    key={field.name} 
                    label={field.label}
                    component={SurveyField}
                    name={field.name}
                    type="text" 
                />
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                    {this.renderFields()}
                    <Link to="/surveys">Cancel</Link>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// Validation for New Survey
function validate(values) {
    const errors = {}

    errors.emails = validateEmails(values.emails || '')

    formFields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = 'Required Field'
        }
    })

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)