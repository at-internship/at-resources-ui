const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { dashboard,
        renderDashboard,
        renderAddTaskForm,
        addTask,
        renderEditTaskForm,
        updateTask,
        renderSprint, 
        renderAddSprintForm,
        addSprint,
        renderEditSprintForm,
        updateSprint,
        renderMentorList,
        renderMetrics} = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - renderDashboard
router.get('/', renderDashboard);

// AT-RESOURCES - renderDashboard
router.get("/dashboard", renderDashboard);

// AT-RESOURCES - renderAddTaskForm
router.get("/task/add", renderAddTaskForm);

// AT-RESOURCES - addTask
router.post("/task/add", addTask);

// AT-RESOURCES - renderEditTaskForm
router.get("/task/edit/:id", renderEditTaskForm);

// AT-RESOURCES - updateTask
router.put("/task/edit/:id", updateTask);


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

 //---------METRICS----------//

 router.get("/metrics", renderMetrics); //-- Graphics


 //-----------Mentors-----------//    
// Render Mentor List
router.get("/mentors",renderMentorList);

module.exports = router;