const express = require("express");
const router = express.Router();
const path = require("path");

// AT-RESOURCES - Controller
const {
    dashboard,
    sprint,
    backlog,
    mentors,
    metrics,
    teams,
    members
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
router.get("/teams", teams);

//-----------MEMBERS-----------//

// AT-RESOURCES - MEMBERS
router.get("/members", members);

module.exports = router;