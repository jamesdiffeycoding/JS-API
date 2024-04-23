console.log("FILE READ: ' server.js'");

const express = require("express");
const app = express();
// const cors = require('cors');

// CORS middleware setup
// app.use(cors({
  // origin: '*', // Set your desired origin here or use a function for dynamic origin determination
  // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// }));

// Other middleware setup
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// Route setup
const userRouter = require("./routes/users");
app.use("/users", userRouter);

// Routes
app.get("/", (req, res) => {
    res.send(`This is the homepage`);
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
