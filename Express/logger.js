const logger = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const logMessage = `${req.method} ${req.url} ${res.statusCode} - ${duration}ms`;
        console.log(logMessage);
    });
    next();
};

module.exports = logger;