const errorHandler = (err) => {
    let status = 500, message = "Internal server error", error = null;

    if (err && err.name === 'SequelizeValidationError') {
        error = err.errors.map(e => { return { [e.path]: e.message } });
        message = "Validation error!";
        status = 400
    } else if (err.name == 'SequelizeUniqueConstraintError') {
        error = err.errors.map(e => { return { [e.path]: e.message } });
        message = "Validation error!";
        status = 409
    }

    return { status, message, error }
};

module.exports = errorHandler;