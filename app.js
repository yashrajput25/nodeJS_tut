const fs = require('fs')
// fs.writeFileSync('./content/example.txt', "Hello world")
// console.log("file written")
// const content = fs.readFileSync('./content/example.txt' , 'utf-8')
// console.log(content);

fs.readFile('./content/example.txt' , 'utf-8' , (err , data) => {
    if(err){
        console.log("Got a fucking error!")
    }

    console.log(data);
})

console.log("code has been executed successfully");