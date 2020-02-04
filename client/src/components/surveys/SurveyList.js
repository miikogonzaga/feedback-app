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
                <div className="surveyList" key={survey._id}>
                    <h3>{survey.title}</h3>
                    <p>{survey.body}</p>
                    <div className="surveyListBottom">
                        <div>
                            <a style={{ marginRight: 10 }}><small>Yes: {survey.yes}</small></a>
                            <a><small>No: {survey.no}</small></a>
                        </div>
                        <div>
                            <span><small>Date Sent: {new Date(survey.dateSent).toLocaleDateString()}</small></span>
                        </div>
                    </div>
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