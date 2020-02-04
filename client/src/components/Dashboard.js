import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = props => {
    return (
        <div>
            <h2>Surveys Dashboard</h2>
            <SurveyList />
            <br></br>
            <br></br>
            <div style={{ textAlign: 'center' }}>
                <Link className="button" to="/surveys/new">Add Survey</Link>
            </div>
        </div>
    )
}

export default Dashboard