const router = require("express").Router();
const Event = require("../models/Event.model");
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

router.get("/", isLoggedIn, (req, res, next) => {
  Event.find({ date: { $gt: Date.now() } }, {}, { sort: "date", limit: 4 })
    .populate("pet")
    .then((events) => {
      return res.status(201).json({ events });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "Problem accessing events" });
    });
});

module.exports = router;
