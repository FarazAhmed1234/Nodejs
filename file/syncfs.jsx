// const fs = require('fs')


// const filename = "text.txt";
// const writefile = fs.writeFileSync(
//     filename, "My name is Faraz Ahmed  and I am Fronted ", "utf-8"
// )

// console.log(writefile)









const fs = require('fs');
const path = require('path');

const filename = "text.txt";
const filePath = path.join(__dirname, filename);

// Read file synchronously with encoding
const readfile = fs.readFileSync(filePath, 'utf8');

console.log(readfile.toString());
