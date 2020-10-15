const rscCtrl = {};

// AT-RESOURCES - Index/Dashboard
rscCtrl.renderDashboard = async(req, res) => {
    console.log("--> rscCtrl.dashboard");
    res.render("dashboard");
};
//---------------------------------------



// AT-SSO - Admin - Dashboard - Render Add User Form
rscCtrl.renderAddTaskForm = async(req, res) => {
    console.log("--> rscCtrl.renderAddTaskForm");
    res.render("/task/add");
};

// AT-SSO - Admin - Users - Add User
rscCtrl.addTask = async(req, res) => {
    console.log("--> rscCtrl.addTask");
};

// AT-SSO - Admin - Users - Render Edit User Form
rscCtrl.renderEditTaskForm = async(req, res) => {
    console.log("--> rscCtrl.renderEditTaskForm");
    res.render("/task/edit");
};

// AT-SSO - Admin - Users - Edit User
rscCtrl.updateTask = async(req, res) => {
    console.log("--> rscCtrl.updateTask");

};



module.exports = rscCtrl;