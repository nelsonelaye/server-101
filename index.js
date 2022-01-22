const http = require('http')

// http.createServer((req, res) => {
//     res.write("Server 101");
//     res.end();
// }).listen(2020)

const port = 2021;

// let student = {
//     name: "Nelson",
//     course: "backend"
// };

let student = [ {name: "Lucy", course: "backend"},
                {name: "Precious", course: "UI"},
                {name: "Cynthia", course: "Frontend"}
            ];

const showContent =  (req, res) => {
        res.setHeader("content-type", "application/json");
        res.setHeader("content-type", "text/plain");
        res.write("I am writing a plain text");
        res.write("\n")
        res.end(JSON.stringify(student))
    }

const server1 = http.createServer(showContent);

server1.listen(port, () => {
    console.log("Server is running on " + port)
})




//converts JSON  object to javascript object
// JSON.stringify()

//converts javascript object to JSON object
// JSON.parse()