import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
            <div>
                <h2>Send <em>Free</em> Surveys and Track Feedback from your Users.</h2>
                <p>Login and start gathering today.</p>
                <br></br>
                <a className="button" href="/auth/google">Login</a>
            </div>
            <div>
                <img src="/images/landing.png" alt="landing page graphic" />
            </div>
        </section>
    )
}

export default Landing;