const router = require("express").Router();
const Service = require("../models/Service.model");
const Review = require("../models/Review.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/add", isLoggedIn, async (req, res, next) => {
  const { category, name, image, description, schedule, location, creator } =
    req.body;

  if (
    !category ||
    !name ||
    !description ||
    !schedule ||
    !location ||
    !creator
  ) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  try {
    const service = await Service.create({
      category,
      name,
      image,
      description,
      schedule,
      location: {
        type: "Point",
        coordinates: [location.lat, location.lng],
      },
      creator,
    });
    const user = await User.findById(req.session.user._id).exec();
    user.favServices.push(service);
    const updatedUser = await user.save();
    res.status(201).json({ service });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
});

router.get("/", (req, res, next) => {
  Service.find()
    .then((services) => {
      return res.json(services);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing services" });
    });
});

module.exports = router;
