const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require("./routes/pet.routes")(app);

app.listen(port, () => console.log(`Connected at port: ${port}`));
