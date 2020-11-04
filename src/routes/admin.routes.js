const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { 
    renderIndex, 
    renderStoryList,
    renderAddStoryForm,
    addStory,
    renderEditStoryForm,
    updateStory,
    deleteStory 
} = require("../controllers/admin.controller");
const { route } = require("./at-resources.routes");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Admin - Index
router.get("/", renderIndex);

// AT-RESOURCES - Admin - Story list
router.get("/story", renderStoryList);

// AT-RESOURCES -Admin- Render Add list
router.get("/story/add", renderAddStoryForm);

// AT-RESOURCES- Admin - Add List
router.get("/story/add", addStory);

// AT- RESOURCES- Admin - Render Edit Story From
router.get("/story/edit/:id", renderEditStoryForm);

// AT- RESOURCES - Admin- Update Story
router.get("/story/edit/:id", updateStory);

// AT-RESOURCES - Admin - Delete Story
router.get("admin/story/delete/:id", deleteStory);



module.exports = router;