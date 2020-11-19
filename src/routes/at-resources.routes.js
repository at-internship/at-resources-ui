const express = require("express");
const router = express.Router();
const path = require("path");

// AT-RESOURCES - Controller
const {
    dashboard,
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