const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
