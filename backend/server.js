const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// env config
dotenv.config();

// mongodb connection
connectDB()

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// variables
const PORT = process.env.PORT || 3000;

app.use("/api/v1", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.dev_mode} on ${PORT}`);
});
