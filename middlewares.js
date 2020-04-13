import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Yeotube";
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    authenticated: true,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
