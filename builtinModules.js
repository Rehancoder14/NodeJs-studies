const fs = require('fs');
let text = fs.readFileSync('name.txt','utf-8')
console.log(text)
text = text.replace('rehan','brock lesnar')
console.log("creating a new file")
fs.writeFileSync("rehan.txt",text)