import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'

// Review before submission
const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    console.log(formValues)
        const reviewFields = formFields.map(({ name, label }) => {
            return (
                <div key={name}>
                    <label>{label}</label>
                    <div>{formValues[name]}</div>
                </div>
            )
        })

    return (
        <div>
            <h3>Review</h3>
            {reviewFields}
            <button onClick={onCancel}>
                Go Back
            </button>
            <button onClick={() => submitSurvey(formValues)}>
                Send Survey
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(SurveyFormReview)