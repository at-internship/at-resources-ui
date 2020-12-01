// AT Resources Controller
const atResourcesController = {};

// MICROSERVICE - HEROKU - SSO
const atResourcesAPI = require("../services/at-resources-api.service");

//-----------DASHBOARD-----------//
// AT-RESOURCES - Index/Dashboard
atResourcesController.dashboard = async(req, res) => {
    console.log("--> atResourcesController.dashboard");

    let storyTask = [];
    try {
        const responseStoryTask = await atResourcesAPI.getAllStories();
        if (responseStoryTask === null || responseStoryTask === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            storyTask = responseStoryTask.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("dashboard", { storyTask });
    }
};
//-----------DASHBOARD-----------//

//-----------BACKLOG-----------//
// AT-RESOURCES - Render Backlog
atResourcesController.backlog = async(req, res) => {
    console.log("--> atResourcesController.backlog");
    res.render("backlog");
};
//-----------BACKLOG-----------//

//-----------SPRINT-----------//
// AT-RESOURCES - Render Sprint
atResourcesController.sprint = async(req, res) => {
    console.log("--> atResourcesController.sprint");

    let stories = [];
    try {
        const responseStoryList = await atResourcesAPI.getAllStories();
        if (responseStoryList === null || responseStoryList === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            stories = responseStoryList.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("sprint", { stories });
    }
};
//-----------SPRINT-----------//

//-----------MEMBERS-----------//
// AT-RESOURCES - Render Members
atResourcesController.members = async(req, res) => {
    console.log("--> atResourcesController.members");
    res.render("members");
};
//-----------MEMBERS-----------//

//-----------TEAMS-----------//
// AT-RESOURCES - Render Teams
atResourcesController.teams = async(req, res) => {
    console.log("--> atResourcesController.teams");
    res.render("teams");
};
//-----------TEAMS-----------//

//-----------MENTORS-----------//
// AT-RESOURCES - Render Mentors
atResourcesController.mentors = async(req, res) => {
    console.log("--> atResourcesController.mentors");
    res.render("mentors");
};
//-----------MENTORS-----------//

//-----------METRICS------------//
// AT-RESOURCES - Render Metrics
atResourcesController.metrics = async(req, res) => {
    console.log("--> atResourcesController.metrics");
    res.render("metrics");
};
//-----------METRICS------------//

module.exports = atResourcesController;