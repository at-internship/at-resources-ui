const express = require("express");
const router = express.Router();
const path = require("path");

// AT-RESOURCES - Controller
const {
  dashboard,
  renderAddTaskForm,
  addTask,
  renderEditTaskForm,
  updateTask,
  sprint,
  renderAddSprintForm,
  addSprint,
  renderEditSprintForm,
  updateSprint,
  backlog,
  mentors,
  metrics,
  renderMembersList,
  renderTeamList,
} = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-RESOURCES - Dashboard
router.get("/", dashboard);

// AT-RESOURCES - Dashboard
router.get("/dashboard", dashboard);

// AT-RESOURCES - renderAddTaskForm
router.get("/task/add", renderAddTaskForm);

// AT-RESOURCES - addTask
router.post("/task/add", addTask);

// AT-RESOURCES - renderEditTaskForm
router.get("/task/edit/:id", renderEditTaskForm);

// AT-RESOURCES - updateTask
router.put("/task/edit/:id", updateTask);

//-----------SPRINT-----------//

// AT-RESOURCES - Render Sprint
router.get("/sprint", sprint);

// AT-RESOURCES - Render AddSprint
router.get("/sprint/add", renderAddSprintForm);

// AT-RESOURCES - AddSprint
router.post("/sprint/add", addSprint);

// AT-RESOURCES - Render editSprint
router.get("/sprint/edit/:id", renderEditSprintForm);

// AT-RESOURCES - Update sprint
router.put("/sprint/edit/:id", updateSprint);

//---------METRICS----------//

// AT-RESOURCES - Render Metrics
router.get("/metrics", metrics); //-- Graphics

//-----------BACKLOG-----------//

// AT-RESOURCES - Render Backlog
router.get("/backlog", backlog);

//-----------MENTORS-----------//

// AT-RESOURCES - Render Mentors
router.get("/mentors", mentors);

//-----------TEAMS-----------//

// AT-RESOURCES - TEAMS
router.get("/teams", renderTeamList);

//-----------MEMBERS-----------//

// AT-RESOURCES - MEMBERS
router.get("/members", renderMembersList);



module.exports = router;
