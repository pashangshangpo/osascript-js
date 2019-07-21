/**
 * @file displayAlert
 * @author xzh
 * @date 2019-07-21 16:47:30
 */

const run = require('../run')

module.exports = (option) => {
    return run(({ title = '', as, message, buttons, givingUpAfter }) => {
        const app = Application.currentApplication()
        app.includeStandardAdditions = true
    
        return app.displayAlert(title, {
            ...(message && { message }),
            ...(as && { as }),
            ...(buttons && { buttons }),
            ...(givingUpAfter && { givingUpAfter }),
        }).buttonReturned
    }, option)
}
