const router = require("express").Router();
const {
  index,
  create,
  messages,
  deleteChat,
  addUserToGroup,
  imageUpload,
  leaveCurrentChat
} = require("../controller/chatController");
const { validate } = require("../validators");
const { auth } = require("../middleware/auth");
const { chatFile } = require("../middleware/fileUpload");

router.get("/", [auth], index);
router.post("/create", [auth], create);
router.get("/messages", [auth], messages);
router.post("/upload-image", [auth, chatFile], imageUpload);
router.post("/add-user-to-group", auth, addUserToGroup);
router.post("/leave-current-chat", auth, leaveCurrentChat);
router.delete("/:id", [auth], deleteChat);

module.exports = router;
