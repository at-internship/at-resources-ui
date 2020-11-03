const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndex,
        renderEditStoryForm } = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

// AT-RESOURCES - Admin - Edit Story Form
router.get("/story/edit/:id", renderEditStoryForm);

module.exports = router;