const http = require('http');
const { reverse } = require('lodash');

//Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome!');
})

// const server = http.createServer((req, res)=>{
//     if (req.url === '/'){
//         res.end('Welcome to our home page!');
//     }
//     if (req.url === '/about'){
//         res.end('This is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for.</p>
//     <a href="/">back home</a>
//     `)
// })

server.listen(5000);