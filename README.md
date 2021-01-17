# shopify-frontend-challenge
Shopify Summer 2021 Internship Frontend Challenge

This provides a simple, easy-to-user interface for users to search for movies by title, and nominate five for the Shoppies. Each movie can be toggled to view more information such as genre, directors, actors, and plot; furthermore, the user's choices are saved even when the tab is closed.

### About the Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo
A demo of the app can be accessed [here](https://jye-1243.github.io/Shopify-Frontend-Challenge/).

![Screenshot of the interface](https://github.com/jye-1243/Shopify-Frontend-Challenge/blob/master/public/screenshot.PNG)

## Getting Started

### Prerequisites
This front-end was built with ReactJS. To requirements to run a React App can be installed by following the instructions [here](https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/).

### Installation

1. Clone this [git repository](https://github.com/jye-1243/Shopify-Frontend-Challenge)
2. Get a free OMDb API Key at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
3. Copy paste your API Key into the line `const API_KEY = ` in both `App.js` and `SearchResult.js`. For the purposes of this demo, an API key is already listed.

## Usage

To run the app, navigate to the appropriate directory and run `npm start`. The app will load in http://localhost:3000/.
From there, the user may search for movies by title, and relevant search results will appear in the bottom-left panel. For each movie, users may choose to see more information, or nominate it for the Shoppies. Once movies are nominated, they appear on the right side, where users can also remove their nomination. Users may nominate up to five movies for the Shoppies, at which point a banner appears and no more can be nominated. 

The app uses cookies to save nominations when the tab is closed. To remove these cookies, the user can click the "Remove cookies" button. They may also reset their nominations using the "Reset Selection" button.



