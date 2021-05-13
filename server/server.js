const express = require('express');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

// routes
require('./routes/sneaker.routes')(app);

app.listen(port, () => console.log("Successfully connected on port " + port));

