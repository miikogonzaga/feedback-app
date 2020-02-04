# Feedback Survey App

A platform for users to send surveys. This is an educational Full Stack App from Stephen Grider on [Udemy](https://www.udemy.com/course/node-with-react-fullstack-web-development/).

![alt text](https://pxlbypxl.com/wp-content/uploads/2020/02/feedback-survey.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

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
```

Run app in browser
```
npm run dev
```

## Deployment

* Heroku

## Built With

* ReactJS
* Redux, Redux Form
* ExpressJS
* NodeJS
* MongoDB

## Features

* Google OAuth Authentication
* Stripe API Integration
* Sendgrid Integration and Webhooks
* Survey Feedback 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
