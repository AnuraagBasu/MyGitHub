# MyGitHub
a react/redux app which lets user to access their GitHub repos

## Demo
[here](https://my-git-hub.herokuapp.com/)

## Steps to Run
* Clone the project
* run _**npm install**_
* Change the _gitHubClientId_ and _gitHubClientSecret_ in the [constants](https://github.com/AnuraagBasu/MyGitHub/blob/master/app/core/config/constants.js) file to point to your auth tokens
* run _**npm run web-prod**_ - this will create the _**bundle.js**_ and also start up an express server on port 3000 (or, whichever is mentioned through env vars)
