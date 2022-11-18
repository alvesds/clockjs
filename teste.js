let { clock } = require('./clock')

let newDate = clock('03:42:17 PM').as('HH:mm:ss');

console.log(newDate)