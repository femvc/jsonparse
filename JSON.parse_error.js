var fs = require('fs')

fs.readFile('./session_a_run.txt', 'utf8', function(err, fileContent) {
  if (err) return console.error(err)
  console.log(JSON.parse('[' + fileContent + ']'))
})