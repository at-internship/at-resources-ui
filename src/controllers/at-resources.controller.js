const rscCtrl = {};

// MICROSERVICE - HEROKU - SSO
const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Index/Dashboard
rscCtrl.dashboard = async (req, res) => {
  let storyTask = [];
  try{
    const responseStoryTask = await ssoServiceAPI.getAllStories();
    if (responseStoryTask === null || responseStoryTask === undefined){
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

// AT-RESOURCES - Index/Dashboard - Story/Task - List
// rscCtrl.storyTask = async (req, res) => {
//   const storyTask = [{
//     "name" : "Task AT-#: Not Data",
//     "description": "Task AT: Not Data"
//   }];
//   try{
//     const responseStoryTask = await ssoServiceAPI.getAllStories();
//     if (responseStoryTask === null || responseStoryTask === undefined){
//       req.flash("error_msg", "Service unavailable");
//     } else {
//       console.log("--> rscCtrl.dashboard");
//       storyTask = responseStoryTask.data;
//     }
//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     res.render("dashboard", {storyTask});
//   }
// };
//---------------------------------------

// AT-RESOURCES - Task - Render Add Task Form
rscCtrl.renderAddTaskForm = async (req, res) => {
  console.log("--> rscCtrl.renderAddTaskForm");
  res.render("/task/add");
};

// AT-RESOURCES - Admin - Users - Add User
rscCtrl.addTask = async (req, res) => {
  console.log("--> rscCtrl.addTask");
};

// AT-RESOURCES - Admin - Users - Render Edit User Form
rscCtrl.renderEditTaskForm = async (req, res) => {
  console.log("--> rscCtrl.renderEditTaskForm");
  res.render("/task/edit");
};

// AT-RESOURCES - Admin - Users - Edit User
rscCtrl.updateTask = async (req, res) => {
  console.log("--> rscCtrl.updateTask");
};

// AT-RESOURCES - TEAMS
rscCtrl.renderTeamList = (req, res) => {
  //console.log("--> rscCtrl.renderTeamList");
  res.render("teams");
};
// AT-RESOURCES - MEMBERS
rscCtrl.renderMembersList = (req, res) => {
  res.render("members");
};
//-----------METRICS------------

// AT-RESOURCES - Render Metrics
rscCtrl.metrics = async (req, res) => {
  //console.log("--> rscCtrl.renderMetrics");
  res.render("metrics");
};

//-----------SPRINT-----------//

// AT-RESOURCES - Render Sprint
rscCtrl.sprint = (req, res) => {
  res.render("sprint");
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
rscCtrl.backlog = async (req, res) => {
  console.log("--> rscCtrl.renderBacklog");
  res.render("backlog");
};

//-----------MENTORS-----------//

// AT-RESOURCES - Render Mentors
rscCtrl.mentors = (req, res) => {
  res.render("mentors");
};

module.exports = rscCtrl;
