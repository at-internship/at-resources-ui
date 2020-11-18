const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const {
    renderIndexAdmin,
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
router.get("/", renderIndexAdmin);

//-----------STORY-----------//

//AT-RESOURCES-Render Story
router.get("/story", renderStoryList);

//AT-RESOURCES-Render AddStory
router.get("/story/add", renderAddStoryForm);
//AT-RESOURCES- AddStory
router.post("/story/add", addStory);


// AT-RESOURCES - Admin - Render Edit Story Form
router.get("/story/edit/:id", renderEditStoryForm);
// AT-RESOURCES - Admin - Edit Story
router.put("/story/edit/:id", updateStory);


// AT-RESOURCES - Admin - Delete Story
router.get("/story/delete/:id", deleteStory);

module.exports = router;