const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { dashboard,
        renderDashboard,
        renderAddTaskForm,
        addTask,
        renderEditTaskForm,
        updateTask } = require("../controllers/at-resources.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

router.get('/', renderDashboard);

router.get("/dashboard", renderDashboard);

router.get("/task/add", renderAddTaskForm);

router.post("/task/add", addTask);

router.get("/task/edit/:id", renderEditTaskForm);

router.put("/task/edit/:id", updateTask);

module.exports = router;