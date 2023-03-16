const express = require("express")
const cors = require("cors")

const app = express();
const port = 8000;

app.use(cors())
require("./config/mongoose.config")


require("./routes/user.routes")(app)
require("./routes/createproduct.routes")(app)
require("./routes/giveaway.routes")(app)
require("./routes/admin.routes")(app)


app.listen(port, console.log("Your server is runnig :)"))

