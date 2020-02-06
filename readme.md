# Feedback Survey App 🗳

A platform for users to send surveys and gather feedback. Tutorial from Stephen Grider on [Udemy](https://www.udemy.com/course/node-with-react-fullstack-web-development/).

![alt text](https://pxlbypxl.com/wp-content/uploads/2020/02/Feedback_Survey-GIF.gif)

## Features

* Google OAuth Authentication
* Stripe API Integration
* Sendgrid Integration and Webhooks
* Survey Feedback

## Built With

* ReactJS
* Redux, Redux Form
* ExpressJS
* NodeJS
* MongoDB

## Deployment

* Heroku - [https://feedbacksurvey.herokuapp.com](https://feedbacksurvey.herokuapp.com)

## Installing

Clone the project
```
git clone <project url>
```

Install dependencies
```
npm install
```

Add dev.js to config directory
```
module.exports = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
  cookieKey: '',
  stripePublishableKey: '',
  stripeSecretKey: '',
  sendgridKey: ''
};

// Create accounts on google, mongo, stripe, and sendgrid. 
```

Run app in browser
```
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
