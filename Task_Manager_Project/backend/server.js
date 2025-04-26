
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

require("dotenv").config();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
.then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.error("Connection error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
