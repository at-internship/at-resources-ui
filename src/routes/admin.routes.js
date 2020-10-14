const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndex } = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

module.exports = router;