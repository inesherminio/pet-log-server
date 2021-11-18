const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
const Review = require("../models/Review.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

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

router.get("/favorite", isLoggedIn, (req, res, next) => {
  User.findOne({ email: req.session.user.email })
    .populate("favRecipes")
    .then((user) => {
      res.json(user.favRecipes);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing recipes" });
    });
});

router.post("/create", isLoggedIn, async (req, res, next) => {
  const {
    title,
    statusPrivate,
    image,
    difficulty,
    time,
    ingredients,
    preparation,
    creator,
  } = req.body;

  if (!title || !statusPrivate || !difficulty || !creator) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  try {
    const recipe = await Recipe.create({
      title,
      statusPrivate,
      image,
      difficulty,
      time,
      ingredients,
      preparation,
      creator,
    });
    const user = await User.findById(req.session.user._id).exec();
    user.favRecipes.push(recipe);
    const updatedUser = await user.save();
    res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
});

router.get("/:recipeId", (req, res, next) => {
  const { recipeId } = req.params;
  Recipe.findById(recipeId)
    .populate("creator", "firstName lastName profilePic email")
    .populate({
      path: "reviews",
      populate: {
        path: "creator",
        select: "firstName lastName profilePic email",
      },
    })
    .then((recipe) => {
      return res.json(recipe);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing recipes" });
    });
});

router.post("/:recipeId/reviews/create", isLoggedIn, async (req, res, next) => {
  const { recipeId } = req.params;
  const { title, score, comment, creator } = req.body;

  if (!title || !score || !comment || !creator) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }
  try {
    const review = await Review.create({
      title,
      score,
      comment,
      creator,
    });
    const recipe = await Recipe.findById(recipeId)
      .populate({
        path: "reviews",
        populate: {
          path: "creator",
          select: "firstName lastName profilePic email",
        },
      })
      .populate("creator", "firstName lastName profilePic email")
      .exec();
    recipe.reviews.push(review);
    const total = recipe.reviews.reduce(
      (total, review) => total + review.score,
      0
    );
    //console.log(total);
    //console.log(recipe.reviews.length);
    recipe.rating = total / recipe.reviews.length;
    //console.log(recipe.rating);
    const updatedRecipe = await recipe.save();
    res.status(201).json({ recipe: updatedRecipe });
  } catch (error) {
    return res.status(400).json({ errorMessage: "Problem creating review" });
  }
});

router.patch("/:recipeId/addToFavs", isLoggedIn, async (req, res, next) => {
  const { recipeId } = req.params;

  try {
    const user = await User.findById(req.session.user._id).exec();
    const recipe = await Recipe.findById(recipeId).exec();
    user.favRecipes.push(recipe);
    const updatedUser = await user.save();
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    return res
      .status(400)
      .json({ errorMessage: "Problem adding recipe to favorites" });
  }
});

router.patch(
  "/:recipeId/removeFromFavs",
  isLoggedIn,
  async (req, res, next) => {
    const { recipeId } = req.params;

    try {
      const user = await User.findById(req.session.user._id).exec();
      const recipe = await Recipe.findById(recipeId).exec();
      user.favRecipes.splice(user.favRecipes.indexOf(recipe), 1);
      const updatedUser = await user.save();
      res.status(201).json({ user: updatedUser });
    } catch (error) {
      return res
        .status(400)
        .json({ errorMessage: "Problem removing recipe from favorites" });
    }
  }
);

router.delete("/:recipeId", isLoggedIn, (req, res, next) => {
  const { recipeId } = req.params;
  //console.log(req.params);
  Recipe.findByIdAndRemove(recipeId)
    .then((res) => {
      res.json("Recipe deleted");
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem deleting recipe" });
    });
});

router.patch("/:recipeId", isLoggedIn, (req, res, next) => {
  const { recipeId } = req.params;
  const {
    title,
    statusPrivate,
    image,
    difficulty,
    time,
    ingredients,
    preparation,
  } = req.body;

  Recipe.findByIdAndUpdate(
    recipeId,
    {
      title,
      statusPrivate,
      image,
      difficulty,
      time,
      ingredients,
      preparation,
    },
    { new: true }
  )
    .then((recipe) => {
      console.log(recipe);
      res.status(201).json({ recipe });
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem updating the recipe" });
    });
});

router.get("/", (req, res, next) => {
  Recipe.find(!req.session.user ? { statusPrivate: false } : {})
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
