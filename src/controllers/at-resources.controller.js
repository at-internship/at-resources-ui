const rscCtrl = {};

// AT-RESOURCES - Index/Dashboard
rscCtrl.renderDashboard = async (req, res) => {
  console.log("--> rscCtrl.dashboard");
  res.render("dashboard");
};
//---------------------------------------

// AT-RESOURCES - Task - Render Add Task Form
rscCtrl.renderAddTaskForm = async (req, res) => {
  console.log("--> rscCtrl.renderAddTaskForm");
  res.render("/task/add");
};

// AT-SSO - Admin - Users - Add User
rscCtrl.addTask = async (req, res) => {
  console.log("--> rscCtrl.addTask");
};

// AT-SSO - Admin - Users - Render Edit User Form
rscCtrl.renderEditTaskForm = async (req, res) => {
  console.log("--> rscCtrl.renderEditTaskForm");
  res.render("/task/edit");
};

// AT-SSO - Admin - Users - Edit User
rscCtrl.updateTask = async (req, res) => {
  console.log("--> rscCtrl.updateTask");
};

//-----------Sprint-----------//

rscCtrl.renderMemberslist = (req, res) => {
  res.render("members/membersList");
};

// Render Sprint
rscCtrl.renderSprint = (req, res) => {
  res.render("sprint");
};

// Render addSprint
rscCtrl.renderAddSprintForm = (req, res) => {
  res.render("/sprint/add");
};

// AddSprint
rscCtrl.addSprint = (req, res) => {
  //res.render("/sprint/add");
  console.log("Method addSprint");
};

// Render editSprint
rscCtrl.renderEditSprintForm = (req, res) => {
  // res.render("/sprint/edit/:id");
  console.log("Method editSprint");
};

// Update sprint
rscCtrl.updateSprint = (req, res) => {
  res.render("/sprint/edit/:id");
};

module.exports = rscCtrl;
