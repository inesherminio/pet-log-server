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
    .populate("creator", "firstName lastName profilePic email")
    .populate({
      path: "reviews",
      populate: {
        path: "creator",
        select: "firstName lastName profilePic email",
      },
    })
    .then((services) => {
      return res.json(services);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing services" });
    });
});

router.get("/:serviceId", isLoggedIn, (req, res, next) => {
  const { serviceId } = req.params;
  Service.findById(serviceId)
    .populate("creator", "firstName lastName profilePic email")
    .populate({
      path: "reviews",
      populate: {
        path: "creator",
        select: "firstName lastName profilePic email",
      },
    })
    .then((service) => {
      return res.json(service);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing service" });
    });
});

router.patch("/:serviceId", isLoggedIn, (req, res, next) => {
  const { serviceId } = req.params;
  const { category, name, image, description, schedule } = req.body;
  Service.findByIdAndUpdate(
    serviceId,
    {
      category,
      name,
      image,
      description,
      schedule,
    },
    { new: true }
  )
    .then((service) => {
      return res.json(service);
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem updating service" });
    });
});

router.delete("/:serviceId", isLoggedIn, (req, res, next) => {
  const { serviceId } = req.params;
  Service.findByIdAndDelete(serviceId)
    .then((service) => {
      return res.json("service deleted");
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem deleting service" });
    });
});

router.post(
  "/:serviceId/reviews/create",
  isLoggedIn,
  async (req, res, next) => {
    const { serviceId } = req.params;
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
      const service = await Service.findById(serviceId)
        .populate({
          path: "reviews",
          populate: {
            path: "creator",
            select: "firstName lastName profilePic email",
          },
        })
        .populate("creator", "firstName lastName profilePic email")
        .exec();
      service.reviews.push(review);
      const total = service.reviews.reduce(
        (total, review) => total + review.score,
        0
      );
      service.rating = total / service.reviews.length;
      const updatedService = await service.save();
      res.status(201).json({ service: updatedService });
    } catch (error) {
      return res.status(400).json({ errorMessage: "Problem creating review" });
    }
  }
);

module.exports = router;
