import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const betweenHome = (req, res, next) => {
  console.log("betweenHome");

  next();
};

const handlehome = (req, res) => res.send("hello home sweet home");

const handleProfile = (req, res) => {
  res.send("Profile");
};

app.use(cookiePaser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use(morgan("dev"));

app.use(betweenHome);

app.get("/", handlehome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);
