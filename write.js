const fs = require('fs')

module.exports = {
  writeHelloFile: function() {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;

    console.log('success')
    });
  }
}
