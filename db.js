// export const videos = [
//   {
//     id: 1,
//     title: "Video awesome",
//     description: "This is very good",
//     views: 20,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 1101,
//       name: "Junsoo",
//       email: "junsoo@gmail.com"
//     }
//   },
//   {
//     id: 2,
//     title: "Video nice",
//     description: "This is very good",
//     views: 202,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 1994,
//       name: "Junsoo",
//       email: "junsoo@gmail.com"
//     }
//   }
// ];

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("Error on DB");
db.once("open", handleOpen);
db.on("error", handleError);
