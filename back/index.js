const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(cors({origin: '*'}))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const v1weather = require("./routes/weatherRoute");
app.use("/api/v1/weather", v1weather);

app.listen(port, () => {
    console.log(`Backend ejecutandose en port ${port}.`)
});