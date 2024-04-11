# UI Coding Exercise

We're looking for a UI developer to join our team. This exercise is designed to
assess your skills in the most relevant areas. The *maximum* amount of time spent
on this exercise should be **3** hours. We are not expecting you to finish every single
aspect or to deliver a perfectly polished styled app. The JavaScript code should be 
the priority.

The exercise is to search for gifs using the Giphy API and display them in a list. The user will then be able to add
as a favorite and display those separately. While the exercise must use React, you can bring in any libraries/packages
you want.

## Setup
* Fork this repository and clone it locally.
* Run `npm install` to install all dependencies.
* You'll need to create an account with giphy to get an api key. Open `src/api.js` and follow the instructions on how
to do that.
* Run `npm start` to start the app.
* Go to http://127.0.0.1:5173/ or http://localhost:5173/ to see the app running.

## Tasks
We have provided some wireframes in the `wireframes` directory. Please refer to them as you work through the tasks.

### Basic Layout
* Recreate the basic layout of wireframe 1 in the `wireframes` directory.
* The styling doesn't have to be great but all the elements need to be present:
  * header
  * search input
  * search button
  * reset button
  * results section
  * favorites section
* Clicking the clear button should clear the search input.
* Search functionality will be the next task.

### Search and Display
* Refer to wireframe 2 in the `wireframes` directory.
* Clicking on the search button should make a request to the Giphy API with the
  search term from the text input box.
  * The api.js file already has a function for searching filled out for you to save you
  some time. It will return the full response from the API you can use that one or write your own.
* If there are no results display a message saying so in the results area.

### Adding to favorites
* Refer to wireframe 3 in the `wireframes` directory.
* Clicking on an image should remove it from the results section and place it on the favorites section.
* As a bonus, clicking on an image in the favorites section should remove it from there and place it back in
in the results section. *If* and only if it is from the current search results.
* Extra bonus, any new search results that include something that was favorited should be excluded from the results,

## When you are done
* If your repository is public, send us a link to it. If not add us as a collaborator,
we'll give you our emails.
