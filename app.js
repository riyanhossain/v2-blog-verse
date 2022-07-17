const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  notFound,
  errorHandler,
} = require("./middlewares/defaultErrorMiddlewares");
const dbConnection = require("./db/dbconnect");
const userHandler = require("./routes/user");
const blogHandler = require("./routes/blog");
const commentHandler = require("./routes/comment");
const path = require("path");

const app = express();

//db connection
dbConnection();

//external middlewares
app.use(cors());
dotenv.config();

//Internal middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
app.use("/api/v1/users", userHandler);
app.use("/api/v1/blogs", blogHandler);
app.use("/api/v1/comments", commentHandler);

app.get("/", (req, res) => {
  res.send("server is online");
});

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve("client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

//bad request
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

//error handling
app.use(notFound);
app.use(errorHandler);

// listing to the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
