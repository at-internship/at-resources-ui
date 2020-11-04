const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndex,
        renderEditStoryForm,
        deleteStory} = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

// AT-RESOURCES - Admin - Edit Story Form
router.get("/story/edit/:id", renderEditStoryForm);

// AT-RESOURCES - Admin - Delete Story
router.get("/admin/story/delete/:id", deleteStory);

module.exports = router;