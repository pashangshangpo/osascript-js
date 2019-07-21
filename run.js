/**
 * @file run
 * @author xzh
 * @date 2019-07-21 15:12:43
 */

const fs = require('fs')
const { join } = require('path')
const { exec } = require('child_process')

module.exports = (fn, option = {}) => {
	return new Promise(resolve => {
		const tempJsPath = join(__dirname, `./osascript-${Math.random()}.js`)

		fs.writeFileSync(tempJsPath, `(${fn.toString()})(${JSON.stringify(option)})`)

		exec(`osascript -l JavaScript ${tempJsPath}`, (err, data) => {
            fs.unlinkSync(tempJsPath)
            
			resolve(err ? null : data)
		})
	})
}
