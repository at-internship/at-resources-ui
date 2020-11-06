const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndexAdmin,
        renderStoryList,
        renderAddStoryForm,
        addStory,
        renderEditStoryForm,
        updateStory,
        deleteStory} = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndexAdmin);

// AT-RESOURCES - Admin - Edit Story Form
router.get("/story/edit/:id", renderEditStoryForm);

// ========== EDIT STORY =======

router.put("/admin/story/edit-story/:id", updateStory);

// AT-RESOURCES - Admin - Delete Story
router.get("/admin/story/delete/:id", deleteStory);

module.exports = router;