const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndex, deleteStory } = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

//-----------DELETE STORY-----------//
// AT-RESOURCES - Admin - Delete Story
router.get("/admin/story/delete/:id", deleteStory);

module.exports = router;