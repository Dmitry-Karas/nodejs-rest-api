const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((err, req, res, next) => {
  const {
    status = "fail",
    code = 500,
    message = "Internal server error",
  } = err;

  res.status(code).json({ status, code, message });
});

module.exports = app;
