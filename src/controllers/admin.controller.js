const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
//const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

module.exports = adminCtrl;