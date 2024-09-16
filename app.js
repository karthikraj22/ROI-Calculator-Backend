const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const Roirouter =require("./routes/roiRouter")


dotenv.config();
  
const app = express();


const PORT = process.env.PORT || 8800;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Roirouter)

app.get("/test", (req, res) => {
  res.json({
    message: "Test route is working!"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});