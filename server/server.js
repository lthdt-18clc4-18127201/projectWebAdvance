import express from "express";
import db from "./config/db/connect.js";
import route from "./route/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.connect();
route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
