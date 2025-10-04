const express = require("express");
const router = express.Router();
const {
  getAllBookshelfs,
  createBookshelf,
  getBookshelfById,
  updateBookshelf,
  deleteBookshelf
} = require("../controllers/bookShelfControllers");

router.get("/", getAllBookshelfs);
router.post("/", createBookshelf);
router.get("/:bookshelfId", getBookshelfById);
router.put("/:bookshelfId", updateBookshelf);
router.delete("/:bookshelfId", deleteBookshelf);

module.exports = router;
