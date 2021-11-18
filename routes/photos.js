const router = require("express").Router();
const Photo = require("../models/Photo.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res, next) => {
  Photo.find({ owner: req.session.user._id })
    .then((photos) => {
      return res.status(201).json({ photos });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "Problem accessing photos" });
    });
});

router.post("/add", isLoggedIn, (req, res, next) => {
  const { photo, owner } = req.body;
  console.log("req.body", req.body);

  if (!photo) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  Photo.create({
    photo,
    owner,
  })
    .then((photoAdded) => {
      console.log(photoAdded);
      return res.status(201).json({ photoAdded });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "Problem adding photo" });
    });
});

router.delete("/:photoId", isLoggedIn, (req, res, next) => {
  const { photoId } = req.params;
  console.log(req.params);

  Photo.findByIdAndRemove(photoId)
    .then((photo) => {
      res.json("Photo deleted");
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "Problem deleting photo" });
    });
});

module.exports = router;
