const http = require("http")
const fs = require("fs")
const port = 2003;

const app = http.createServer((req, res) => {
    // res.setHeader("content-type", "text/html")
    // res.end("<p>Nelson</p>")

    fs.readFile("./index.html", (error, data) => {
        if (error) {
            console.log("could not read file")
        } else {
            res.setHeader("content-type", "text/html")
            res.end(data)
        }
    })

    // fs.readFile('./index.html')
    // .then((data) => {
    //     res.setHeader("content-type", "text/html")
    // res.end(data)
    // })
})

app.listen(port, () => {
    console.log("HTML is being served to ", port)
})