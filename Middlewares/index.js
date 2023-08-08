const error = require('./error.handler')
const validate = require('./validator.handler')

module.exports = {
    ...error,
    validate
}