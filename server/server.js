/* eslint-disable */
const express = require("express");
const route =require ("./route/index.js");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
	cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

//db.connect();
route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/* eslint-enable */