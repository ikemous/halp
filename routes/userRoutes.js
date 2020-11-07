const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/user/login", passport.authenticate("local"), ({ user }, res) => {
  const { createdDate, updatedDate, projects, _id, email, username } = user[0];
  if (user) {
    return res.json({
      createdDate,
      updatedDate,
      projects,
      _id,
      email,
      username,
    });
  }
  res.json(user);
});

router.get("/user/verify", ({ user }, res) => {
  const { createdDate, updatedDate, projects, _id, email, username } = user[0];
  if (user) {
    return res.json({
      createdDate,
      updatedDate,
      projects,
      _id,
      email,
      username,
    });
  }
  res.json();
});

router.get("/signout", (req, res) => {
  req.logout();
  res.json(req.user);
});

router.route("/users/search").post(userController.find);

router.route("/user/signup").post(userController.create);

module.exports = router;
