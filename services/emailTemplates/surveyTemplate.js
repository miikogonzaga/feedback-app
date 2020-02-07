const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body>
                <div>
                    <h3>Your input would be valued!</h3>
                    <p>Please click yes or no:</p>
                    <p>${survey.body}</p>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </body>
        </html>
    `
}
