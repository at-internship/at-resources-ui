const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { dashboard, 
        renderSprint, 
        renderAddSprintForm,
        addSprint,
        renderEditSprintForm,
        updateSprint, } = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Index
router.get('/', dashboard);

// AT-RESOURCES - Dashboard
router.get("/dashboard", dashboard);


//-----------Sprint-----------//


// Render Sprint
router.get("/sprint", renderSprint);

//Render AddSprint
router.get("/sprint/add", renderAddSprintForm)

// AddSprint
router.post("/sprint/add", addSprint);

// Render editSprint
router.get("/sprint/edit/:id", renderEditSprintForm);

 // Update sprint
 router.put("/sprint/edit/:id", updateSprint);


module.exports = router;