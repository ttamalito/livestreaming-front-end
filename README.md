# Simple Front-End for the [Livestreaming http2 server](https://github.com/ttamalito/http-2_livestreaming_backend_server)

This project is really simple, to to have some visuals to use the 
backend server, the "main" project is the http2 backend server

## URLs

* /live
* /:user/watchLive
* /login
* /signup

In order to login or create an account use the /login, /signup
urls

In order to start a livestream go to /live

In order to start watching the livestream of a user go to
/:user/watchLive, where :user should be replaced with the username
that is livestreaming

## Run locally

If you wish to run this project locally, you can clone the repository
and make sure to clone the [backend server](https://github.com/ttamalito/http-2_livestreaming_backend_server) as well
otherwise, this project is useless

### Requirements
* You need to have Node.js installed
* install all the dependencies by executing npm install
* Check the requirements of the Backend server to have the full functionality
* Make sure to have your own certificate as this project uses https, make sure that you need to have the same certificate in the backend server, otherwise all the requests through the [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) will not be successful .

To start the server simply execute
npm start in your terminal 

For details about the logic behind the backend server
please visit the [respective repository](https://github.com/ttamalito/http-2_livestreaming_backend_server)
