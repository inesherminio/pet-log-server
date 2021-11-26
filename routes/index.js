const router = require("express").Router();
const authRoutes = require("./auth");
const recipesRoutes = require("./recipes");
const photosRoutes = require("./photos");
const userRoutes = require("./user");
const petsRoutes = require("./pets");
const petServicesRoutes = require("./petServices");
const logsRoutes = require("./logs");
const eventsRoutes = require("./events");

// Handles cloudinary
const fileUploader = require("../config/cloudinary.config");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// File upload route
router.post("/upload", fileUploader.single("fileUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file upload!"));
    return;
  } else {
    res.json({ filePath: req.file.path });
  }
});

// All other routes
router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use("/photos", photosRoutes);
router.use("/user", userRoutes);
router.use("/pets", petsRoutes);
router.use("/services", petServicesRoutes);
router.use("/journal", logsRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
