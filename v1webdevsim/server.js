console.log("FILE READ: ' server.js'")

const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

// allows you to access req.params
app.use(express.json())

// templating
app.set("view engine", "ejs")


// refer to routers for different parts of your application
const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)