const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderIndex,
        renderStoryList,
        renderAddStoryForm,
        addStory,
        renderEditStoryForm,
        updateStory,
        deleteStory
    } = require("../controllers/admin.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

// AT-RESOURCES - Admin - Render Story List
router.get("/story", renderStoryList);

// AT-RESOURCES - Admin - Render Add Story
router.get("/story/add", renderAddStoryForm);

// AT-RESOURCES - Admin - Add Story
router.post("/story/add", addStory);

// AT-RESOURCES - Admin - Render Edit Story
router.get("/story/edit/:id", renderEditStoryForm);

// AT-RESOURCES - Admin - Update Story
router.put("/story/edit/:id", updateStory);

// AT-RESOURCES - Admin - Delete Story
router.get("/story/delete/:id", deleteStory);

module.exports = router;

