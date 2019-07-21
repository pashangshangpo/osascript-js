/**
 * @file displayNotification
 * @author xzh
 * @date 2019-07-21 16:47:30
 */

const run = require('../run')

module.exports = (option) => {
    return run(({ text = '', title, subTitle, soundName }) => {
        const app = Application.currentApplication()
        app.includeStandardAdditions = true
    
        app.displayNotification(text, {
            ...(title && { withTitle: title }),
            ...(subTitle && { subtitle: subTitle }),
            ...(soundName && { soundName }),
        })
    }, option)
}
