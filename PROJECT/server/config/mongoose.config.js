const mongoose = require("mongoose")
const dbName = "TSM";

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established  a connection to the database ${mongoose.connection.name}`))
	.catch(err => console.log(`Something went wrong when connecting to the database with this ${err}`));