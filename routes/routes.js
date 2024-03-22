const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../middleware/authMiddleware");
const {
  getItem,
  addItem,
  getItemId,
  deleteItem,
  updateItem,
} = require("../controllers/controllers");

router.get("/todos", getItem);

router.post("/a", async (req, res) => res.json("Errorrrr"));
router.post("/add-todo", addItem);

router.get("/todo:id", getItemId);

router.delete("/todo/:id", deleteItem);

router.put("/todo:id", updateItem);

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/", userVerification);

module.exports = router;
