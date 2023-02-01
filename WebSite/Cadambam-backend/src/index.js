const express = require("express");
const route = require("./route/route");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://Dipen1234:jVP8pyAv3s3NzEM3@cluster0.dkmbl.mongodb.net/Cadambam-Assignement",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is Connect Successfully."))
  .catch((err) => console.log(err));

app.use("/", route);

app.use((req, res, next) => {
  res.status(404).send({ status: false, msg: `Not found ${req.url}` });
  next();
});

app.listen(3001, function () {
  console.log("Express Port Running on:-", 3001);
});
