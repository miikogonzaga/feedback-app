import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default: 
                return [ 
                    <li key="1"><Payments /></li>,
                    <li style={{ margin: '0 30px' }} key="2">Credit: {this.props.auth.credits}</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li> 
                ]
        }
    }

    render() {
        return (
            <nav>
                <Link to={this.props.auth ? '/surveys' : '/' }>
                    <h2><img style={{ width: 24 }} src="/images/logo.png" /> Feedback Survey</h2>
                </Link>
                <ul>
                    {this.renderContent()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);