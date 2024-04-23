console.log("FILE READ: ' server.js'")

const express = require("express")
const app = express()
const cors = require('cors');

module.exports = cors({
  origin: '*', // Set your desired origin here or use a function for dynamic origin determination
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
});

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
// allows you to access req.body /
app.use(express.json())
app.use(cors)

// templating
app.set("view engine", "ejs")

const userRouter = require("./routes/users")

// app.get("/",  res.send(`Get User With ID `))
app.get("/", (req, res) => {
    res.send(`This is the homepage`)
})

// refer to routers for different parts of your application
app.use("/users", userRouter)

app.listen(3000)