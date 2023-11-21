const express = require("express")
const bodyParser = require("body-parser")

const bookRouter = require("./routes/book")

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(bodyParser.json())
app.use("/book", bookRouter)

app.get("/", (req, res) => {
    res.end("Home Page")
});

app.get("/about", (req, res) => {
    res.end("About page")
});

app.get("/contact", (req, res) => {
    res.end("Contact page")
});

// catch all route
app.get("*", (req, res) => {
    res.status(404).send("Page not found") //Used if any of the page specify not found
})


app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})