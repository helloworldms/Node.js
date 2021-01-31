import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { searchingBy, videos });
};

export const videos = (req, res) => res.render("videos");

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  console.log(req.params);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: "video Detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const editVideo = (req, res) => res.render("Edit video");
export const deleteVideo = (req, res) => res.render("Delete Vidoe");
