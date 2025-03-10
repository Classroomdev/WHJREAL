const path = require("path");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();

const api = require("./routes/api");
const authRoutes = require("./routes/auth");
const passportSetup = require("./services/passport-setup");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://whjreal.onrender.com/"],
  })
);

app.use(helmet());

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_KEY],
  })
);
// app.use('/v1', api);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// app.get('/', (req, res) => {
//   res.send('This is the home page');
// });

module.exports = app;
