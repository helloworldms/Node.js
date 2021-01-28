import routes from "../routes";
export const home = (req, res) =>
  res.render("home", { pageTitle: "home", videosLi });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { searchingBy, videosLi });
};

export const videos = (req, res) => res.render("videos");

export const getUpload = (req, res) => res.render("upload");
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  //to do : upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("Edit video");
export const deleteVideo = (req, res) => res.render("Delete Vidoe");
