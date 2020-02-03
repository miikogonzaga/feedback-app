import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <SurveyList />
            <Link to="/surveys/new">Add Survey</Link>
        </div>
    )
}

export default Dashboard