const { CustomAPIError } = require('../errors/custom-error');

const ErrorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ err: err.message });
    }

    return res.status(500).json({ err: 'Something went wrong...Please try again!' });
}

module.exports = ErrorHandlerMiddleware;