import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys()
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div key={survey._id}>
                    <h3>{survey.title}</h3>
                    <p>{survey.body}</p>
                    <p>{new Date(survey.dateSent).toLocaleDateString()}</p>
                    <a>Yes: {survey.yes}</a>
                    <a>No: {survey.no}</a>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)