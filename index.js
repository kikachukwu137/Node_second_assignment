const http = require("http")


const PORT = 8900;
const HOSTNAME = "localhost";


// request handler


function requestHandler(req,res){
    if (req.method === "GET" && req.url ==="/books"){
        console.log("you have enter the book route")
    }
    else if(req.method ==="PUT" && req.url ==="/books"){
        console.log("book route have been updated")
    }
    else if(req.method === "DELETE" && req.url === "/books"){
        console.log("book route have been deleted")
    }
    else if(req.method === "GET" && req.url === "/books/author"){
        console.log("you have enter the author route")
    }
    else if (req.method === "POST"  && req.url === "/books/author"){
        console.log("route auther have been created")
    }
    else if (req.method === "PUT" && req.url === "/books/author"){
        console.log("author route have been updated")
    }
    else{

        console.log("sorry an error have occurred")
    }
}



// create a server
const server = http.createServer(requestHandler)




// start a server
server.listen(PORT, HOSTNAME, ()=>{
    console.log(`server is up and running at http://${HOSTNAME}:${PORT}`)
})

