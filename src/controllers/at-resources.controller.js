const rscCtrl = {};

// MICROSERVICE - HEROKU - SSO
const atResourcesAPI = require("../services/at-resources-api.service");

// AT-RESOURCES - Index/Dashboard
rscCtrl.dashboard = async(req, res) => {
    let storyTask = [];
    try {
        const responseStoryTask = await atResourcesAPI.getAllStories();
        if (responseStoryTask === null || responseStoryTask === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> rscCtrl.dashboard");
            storyTask = responseStoryTask.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("dashboard", { storyTask });
    }
};

//-----------TEAMS-----------//

// AT-RESOURCES - TEAMS
rscCtrl.renderTeamList = (req, res) => {
    //console.log("--> rscCtrl.renderTeamList");
    res.render("teams");
};

//-----------SPRINT-----------//

// AT-RESOURCES - Render Sprint
rscCtrl.sprint = async(req, res) => {
    let stories = [];
    try {
        const responseStoryList = await atResourcesAPI.getAllStories();
        if (responseStoryList === null || responseStoryList === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> adminCtrl.renderStoryList");
            stories = responseStoryList.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("sprint", { stories });
    }
};

// AT-RESOURCES - Render addSprint
rscCtrl.renderAddSprintForm = (req, res) => {
    res.render("/sprint/add");
};

// AT-RESOURCES - AddSprint
rscCtrl.addSprint = (req, res) => {
    //res.render("/sprint/add");
    console.log("Method addSprint");
};

// AT-RESOURCES - Render editSprint
rscCtrl.renderEditSprintForm = (req, res) => {
    // res.render("/sprint/edit/:id");
    console.log("Method editSprint");
};

// AT-RESOURCES - Update sprint
rscCtrl.updateSprint = (req, res) => {
    res.render("/sprint/edit/:id");
};

//-----------BACKLOG-----------//

// AT-RESOURCES - Render Backlog
rscCtrl.backlog = async(req, res) => {
    console.log("--> rscCtrl.renderBacklog");
    res.render("backlog");
};

//-----------MENTORS-----------//

// AT-RESOURCES - Render Mentors
rscCtrl.mentors = (req, res) => {
    res.render("mentors");
};

//-----------MEMBERS-----------//

// AT-RESOURCES - MEMBERS
rscCtrl.renderMembersList = (req, res) => {
    res.render("members");
};

//-----------METRICS------------//

// AT-RESOURCES - Render Metrics
rscCtrl.metrics = async(req, res) => {
    //console.log("--> rscCtrl.renderMetrics");
    res.render("metrics");
};

module.exports = rscCtrl;