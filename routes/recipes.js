const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

router.get("/search", (req, res, next) => {
  /* Recipe.find({
    $or: [{ title: { $regex: req.query.q } }, { tags: { $in: req.query.q } }],
  }) */
  Recipe.find({
    title: { $regex: req.query.q, $options: "gi" },
  })
    .populate("creator", "firstName lastName profilePic")
    .then((recipes) => {
      return res.json(recipes);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing recipes" });
    });
});

router.get("/favorite", (req, res, next) => {
  User.find()
    .populate("favRecipes")
    .then((user) => {
      console.log(user, "req.session.user", req.session.user);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing recipes" });
    });
});

router.post("/create", (req, res, next) => {
  const {
    title,
    statusPrivate,
    tags,
    image,
    difficulty,
    totalTime,
    prepTime,
    ingredients,
    preparation,
    creator,
  } = req.body;

  if (!title || !private || !difficulty || !creator) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  Recipe.create({
    title,
    statusPrivate,
    tags,
    image,
    difficulty,
    totalTime,
    prepTime,
    ingredients,
    preparation,
    creator,
  })
    .then((recipe) => {
      res.status(201).json({ recipe });
    })
    .catch((error) => {
      return res.status(500).json({ errorMessage: error.message });
    });
});

router.get("/", (req, res, next) => {
  Recipe.find()
    .populate("creator", "firstName lastName profilePic")
    .then((recipes) => {
      return res.json(recipes);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing recipes" });
    });
});

module.exports = router;
