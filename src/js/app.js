import utils from './calc'
import cleanurl from './cleanurl'

var text = cleanurl.make('Webpack Development Environment')
var num = utils.add(1, 998)

console.log(`${text}-${num}`)
