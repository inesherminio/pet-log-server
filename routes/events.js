const router = require("express").Router();
const Event = require("../models/Event.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/add", isLoggedIn, (req, res, next) => {
  const { category, name, pet, owner, date } = req.body;

  Event.create({ category, name, pet, owner, date })
    .then((event) => {
      return res.status(201).json({ event });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ errorMessage: "Problem creating event" });
    });
});

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findById(req.session.user._id).exec();
    const events = await Event.find(
      {
        $and: [{ date: { $gt: Date.now() } }, { pet: { $in: user.pets } }],
      },
      {},
      { sort: "date", limit: 4 }
    )
      .populate("pet")
      .exec();
    console.log(events);
    return res.status(201).json({ events });
  } catch (error) {
    return res.status(400).json({ errorMessage: "Problem accessing events" });
  }
});

module.exports = router;
