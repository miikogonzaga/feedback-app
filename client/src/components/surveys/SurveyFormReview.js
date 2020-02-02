import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

// Review before submission
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
            <button onClick={() => submitSurvey(formValues, history)}>
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

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))