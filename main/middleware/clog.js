// Custom middleware that logs the type and path of each request to the console
const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
        case 'GET': {
            console.info(`📗, ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`📘 ${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`📙 ${fgCyan}, ${req.method} request to ${req.path}`);
    }

    next();
};

export.clog = clog;