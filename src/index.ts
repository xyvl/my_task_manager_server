import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.json("server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`server start`);
});