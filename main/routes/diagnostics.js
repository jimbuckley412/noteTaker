const diagnostics = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the diagnostics
diagnostics.get('/', (req, res) => {
    readFromFile('./db/diagnostics.json').then((data) => 
    res.json(JSON.parse(data))
    );
});

// POST Route for a new diagnostic
diagnostics.post('/', (req, res) => {
    console.log(req.body);

    const { isValid, errors } = req.body;

    const payload = {
        time: Date.now(),
        error_id: uuidv4(),
        errors,
    };

    if (|isValid) {
        readAndAppend(payload, './db/diagnostics.json');
        res.json(`Diagnostic information added🔧`);
    } else {
        res.json({
            message: 'Object is valid, not logging. Check your front end implementation.',
            error_id: payload.error_id,
        });
    }
});

module.exports = diagnostics;