const mongoose = require('mongoose');
const db_name = "sneaker-list";

mongoose.connect("mongodb://localhost/" + db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
  .then(() => console.log("Successfully connected to database: " + db_name))
  .catch((err) => console.log(err));