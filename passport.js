import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
// 쿠키에게 어떤 정보를 주느냐 // user id만 담을 것
passport.deserializeUser(User.deserializeUser());
// 쿠키에게 유저 찾기
