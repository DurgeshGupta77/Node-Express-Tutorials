//Trying to remove the try catch in middleware
const asyncwrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}

// So what we did is we created a function asyncwrapper which takes our controller function as a parameter
// Then we return another async function which await our controller to do the task
// If there is an error we send it to next middleware using next(error)

module.exports = asyncwrapper;