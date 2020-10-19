const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { dashboard, renderBacklog, } = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Index
router.get('/', dashboard);

// AT-RESOURCES - Dashboard
router.get("/dashboard", dashboard);

// AT-RESOURCES - Backlog
router.get("/backlog", renderBacklog);

module.exports = router;