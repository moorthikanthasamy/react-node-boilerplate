import express from "express";
import bodyParser from "body-parser";
import router from "../../src/ui/app/serverEntry";
import md5 from "md5";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./"));
app.use(router);
app.get("/", (req, res) => res.send(`I'm from server`));
app.post("/md5hash", (req, res) => {
  const { data } = req.body;
  const hashValue = data ? md5(data) : "Invalid Input";
  res.send({ hash: hashValue });
});
app.listen(3000, () => console.log("Server Running at 3000"));
