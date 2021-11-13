module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (req.session.user) {
    next();
  } else {
    res.status(403).json({ message: "please log in" });
  }
};
