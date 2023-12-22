const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const index = fs.readFileSync('index.html')
const home = fs.readFileSync('home.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const service = fs.readFileSync('service.html')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url=='/'){
    res.end(index);
  }
  else if(req.url =='/home' ){
    res.end(home)
  }
  else if(req.url =='/about' ){
    res.end(about)
  }
  else if(req.url =='/contact' ){
    res.end(contact)
  }
  else if(req.url =='/service'){
    res.end(service)
  }
  else{
    res.end(index);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});