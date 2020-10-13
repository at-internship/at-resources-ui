const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { dashboard } = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Index
router.get('/', dashboard);

// AT-RESOURCES - Dashboard
router.get("/dashboard", dashboard);

module.exports = router;