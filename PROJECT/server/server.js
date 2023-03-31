const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config');

require('./routes/user.routes')(app);
require('./routes/createproduct.routes')(app);
require('./routes/admin.routes')(app);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server run on port ${PORT}...`));
