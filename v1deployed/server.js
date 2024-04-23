console.log("FILE READ: ' server.js'")

const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
// allows you to access req.body /
app.use(express.json())

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