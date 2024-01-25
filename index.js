const http = require("http")

const PORT = 8900;
const HOSTNAME = "localhost";


// request handler or the behaviour 
function requestHandler(res,res){
    res.writeHead(200)
    res.write("EGWAOJE DANIEL KIKACHUKWU")
    res.end()
}


// create a server

const server = http.createServer(requestHandler)

// start the server
server.listen(PORT, HOSTNAME,()=>{
    console.log(`server is running at http:${HOSTNAME}:${PORT}`)
})