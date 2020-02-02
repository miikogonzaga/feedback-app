import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipients', name: 'emails' },
]

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(field => {
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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))} >
                    {this.renderFields()}
                    <Link to="/surveys">Cancel</Link>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = 'You must provide a title'
    }

    errors.emails = validateEmails(values.emails || '')

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm)