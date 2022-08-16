import express from "express";
import "./router/index.ts";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello dawdawWorld!");
});
app.listen(3000, () => {
  console.log("Example app listdwadawening on port 3000!");
});
