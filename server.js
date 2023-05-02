const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./Develop/public/assets/helpers/uuid');
const util = require('util');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('Develop'));


// GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/notes.html'))
);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/index.html'))
);

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Send a message to the client

  readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)));
  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);

});

app.delete("/api/notes/:id", (req, res) => {

  const currentId = req.params.id
  fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const parsedReviews = JSON.parse(data);

      const index = parsedReviews.findIndex(note => note.id === currentId);

      parsedReviews.splice(index, 1);

      fs.writeFile(
        './Develop/db/db.json',
        JSON.stringify(parsedReviews, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated!')
      );
      const response = {
        status: 'success'
      };
      res.status(201).json(response);
    }
  })
  
 });

// POST request to add a notes
app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  console.log(JSON.stringify(req.body))
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        // Add a new notes
        parsedNotes.push(newNote);
        // Write updated reviews back to the file
        fs.writeFile(
          './Develop/db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated!')
        );
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };


    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);