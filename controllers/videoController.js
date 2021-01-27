export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { searchingBy });
};
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("Edit video");
export const deleteVideo = (req, res) => res.render("Delete Vidoe");
