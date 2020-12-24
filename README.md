# Nanos-Ads

This project's purpose is to share contents of an ad to a web application from a database. It contains two directories, called 'api' and 'frontend'. 

The API is written in Flask, which is connected to a MongoDB database and exposes API endpoints for retrieving all ads or retrieving an ad by name.
The frontend is written in React, which fetches the responses from the API and displays it, and uses Semantics-UI for the interface.

### For this project, please make sure you have the following dependencies:
* Python >= 3.6
* Nodejs >= 14.15.1
* npm >= 6.14.8


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

## Frontend code structure in-depth

The frontend mainly consists of two components rendered in the application.

### TableAds

TableAds is the default component and it loads when the page starts. It contains a function called TabularData which asynchroniously fetches the API url '/ads' which retrieves all ads, using a GET method. The json fetched is decomposed to get it's values, then shown in a 'semantic-ui' table (See documentation here: https://react.semantic-ui.com/collections/table/). The table body consists of a map function, which renders a table row for each ad in the data, preventing static rendering of ads. Each separate row is also combined with a 'Show details' button, which is mapped to an onClick function. This function gets the name of the clicked ad and redirects to the respective url. 

### Details

Details is the second component, loads only when details are requested from a single ad. This also uses an asynchronious function, which fetches a single ad by providing it's name using the previously mentioned onClick function, and is a POST method. The function returns the details for each platform present in the ad. If any of the platforms is excluded, it will be skipped in the rendering. It provides the corresponding image as well, depending on the ad and the platform (See documentation here: https://semantic-ui.com/elements/image.html).

### The application

The main application is built with routes and a switch. The default route path is '/', it simply redirects to '/index'. The index route, contains a component which calls the function TabularData for the default rendering. When show details is clicked, the handleClick function is triggered, which dynamically changes the url to '/details/<adname>' using a react router, depending on the ad that was clicked. 


## API code structure in-depth

On the backend side, flask establishes a connection to MongoDB atlas, handles population and information retrieving, and exposes endpoints for the frontend. The default url '/' simply repopuplates the database and returns a code 200. The '/ads' url, repopuplates the database again, used to prevent loading of an old data, in case this was the first url accessed. This url returns jsonified format of the data. The '/ads/<name>' url returns data from the same format, just for the specified ad name. 

## Further improvements

The application could be improved further, both the UI and the functionallity. The images are stored locally and the best practice is to store them in the server as image paths, to prevent memory conflicts in the database. The application lacks error handling, for example, links that are not valid are not handled by the app. From the API side, flask cors can be used to allow only specific an access to the database. Also, further testing and error handling on both sides is required. There are many other improvements that underlay in the app, but that's the case for every app, isn't it?
