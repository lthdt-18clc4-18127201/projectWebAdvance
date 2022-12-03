import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import route from "./routes/index.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// const cookieSession = require("cookie-session");
// const express = require("express");
// const cors = require("cors");
// const route = require ("./routes/index.js");
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = "166244307267-5nqmrkvug5isrni7pv2pietceivt1tsc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const app = express();
// const port = process.env.PORT || 5001;

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

app.use(
	cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },  
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }  
  )  
);  

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//db.connect();
route(app);

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
app.listen("5001", () => {
  console.log("Server is running!");
});
