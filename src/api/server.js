import express from "express";
import router from "../../src/ui/app/serverEntry";
const app = express();
app.use(express.static("./"));
app.use(router);
app.get("/", (req, res) => res.send(`I'm from server`));

app.listen(3000, () => console.log("Server Running at 3000"));
