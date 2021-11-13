const router = require("express").Router();
const authRoutes = require("./auth");
const recipesRoutes = require("./recipes");

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

module.exports = router;
