const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
//const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-RESOURCES - Admin - Render Edit Story Form
adminCtrl.renderEditStoryForm = async(req, res) => {
    console.log("--> adminCtrl.renderEditStoryForm");
    res.render("admin/story/edit-story");
};

module.exports = adminCtrl;