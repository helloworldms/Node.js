import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRoutr";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.use(cookiePaser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//누군가 /user 접속하면 이 전체 router를 사용하겠다.

export default app;
