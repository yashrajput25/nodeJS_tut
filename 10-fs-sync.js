const fs = require('fs');
console.log("Starting");

const content = fs.readFileSync('./content/first.txt', 'utf-8');
console.log('File Content:', content)
console.log("Printed after the content is read through 'sync' ")

