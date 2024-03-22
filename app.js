const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

const app = express();

const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// We call app.use() on EACH request
app.use(cors(corsOptions));

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});

app.use(express.json());
app.use(cookieParser());

// routes
const itemRoutes = require("./routes/routes");

app.use("/", itemRoutes);
