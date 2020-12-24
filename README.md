# Nanos-Ads

This project's purpose is to share contents of an ad to a web application from a database. It contains two directories, called 'api' and 'frontend'. 

The API is written in Flask, which is connected to a MongoDB database and exposes API endpoints for retrieving all ads or retrieving an ad by name.
The frontend is written in React, which fetches the responses from the API and displays it, and uses Semantics-UI for the interface.


## Installation

Navigate to the 'api' folder and install the requirements by typing:


```
pip3 install -r requirements.txt
```

After installing the requirements, navigate back to the 'frontend' folder and type:


```
npm install
```

If everything is installed properly, the application is ready for use.


## Start the app

In terminal, navigate to the 'frontend' folder. From there:


```
yarn start-api
```

..to start the Flask API. In a new terminal, navigate to the 'frontend' folder again, then:


```
yarn start
```
