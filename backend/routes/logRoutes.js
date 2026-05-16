const router = require("express").Router();

const logger = require("../middleware/logger");

const {
  createLog
} = require("../controllers/logController");

router.post("/", logger, createLog);

module.exports = router;