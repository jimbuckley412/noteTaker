const express = require('express');
const path = require('path');
const { clog } = require('../middleware/clog');
const apiRoutes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware CLOG
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for diagnostics page
app.get('/diagnostics', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/diagnostics.html'))
);

// GET Route for retrieving all the notes
app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/db/db.json'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/404.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);