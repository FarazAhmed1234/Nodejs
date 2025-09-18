const fs = require('fs')


const filename = "text.txt";
const writefile = fs.writeFileSync(
    filename, "My name is Faraz Ahmed  and I am Fronted ", "utf-8"
)

console.log(writefile)