const connectoMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectoMongo();
const app = express();
const port = 5000;

// Available Routes
// app.get("/", (req, res) => {
//   res.send("Hello Sam");
// });
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook Backend listening on port ${port}`);
});
