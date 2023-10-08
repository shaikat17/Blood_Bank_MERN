const express = require("express");
const testController = require("../controllers/textController");

const router = express.Router();

// routes
router.get("/test", testController);

// export
module.exports = router;
