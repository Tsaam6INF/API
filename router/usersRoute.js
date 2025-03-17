const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser)
  .put(userController.updateUser);
router.route("/:id").get(userController.getUser);
// .post(itemController.updateItem);

module.exports = router;
