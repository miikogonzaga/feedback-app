import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import * as actions from '../actions'

class Payments extends React.Component {
    render() {
        return (
            <StripeCheckout 
                name="Feedback"
                description="$1.00 per 5 credits"
                amount={100}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <span className="button">Add Credits</span>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments)
