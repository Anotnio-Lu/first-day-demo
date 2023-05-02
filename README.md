# Express.js Challenge: Note Taker
This is a back-end application called Note Taker that allows users to write and save notes. It uses an Express.js back end and saves and retrieves note data from a JSON file.

## User Story
- AS A small business owner
- I WANT to be able to write and save notes
- SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Acceptance Criteria
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Approach
To approach this project, we needed to build the back-end of the Note Taker application and connect it with the front-end. The application uses an Express.js server to handle HTTP requests and responses. The fs module is used to read and write data to a JSON file.

To meet the acceptance criteria, we created two HTML routes and two API routes. The HTML routes are used to serve the front-end pages, while the API routes are used to read and write data to the JSON file. We used npm packages like uuid to give each note a unique id when it's saved. We also added a DELETE route to delete a note from the JSON file.

## Completed tasks
To finish this project, we completed the following tasks:
- Set up the Express.js server
- Created the HTML routes for serving the front-end pages
- Created the API routes for reading and writing data to the JSON file
- Used uuid npm package to generate unique ids for each note
- Added a DELETE route to delete a note from the JSON file

## Conclusion
The Note Taker application is a simple yet powerful tool that allows users to easily write and save notes. With the back-end built using Express.js and the JSON file used for storage, the application can be easily deployed to Heroku or any other cloud service provider.

## Screenshot

![App Screenshot](./Develop/public/assets/images/Note%20Taker.png)

## Link

The below is a link to the deployed application: 


## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License.
