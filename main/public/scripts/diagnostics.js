const diagnostics = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
diagnostics.get('/', (req, res) => {
    console.info(`${req.method} request received for diagnostics`);
    readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI diagnostic note

diagnostics.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { user, diagnostic } = req.body;

    if (req.body) {
        const newDiagnostic = {
            user,
            diagnostic,
            diagnostic_id: uuidv4(),
        };

        readAndAppend(newDiagnostic, './db/diagnostics.json');
        res.json(`Diagnostic note added successfully 🚀`);
    } else {
        res.error('Error in adding diagnostic note');
    }
});

module.exports = diagnostics;