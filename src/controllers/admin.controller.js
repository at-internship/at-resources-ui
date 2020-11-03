const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
//const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};


//-----------DELETE STORY-----------//
// AT-RESOURCES - Admin - Delete Story

adminCtrl.deleteStory = async(req, res) => {
    console.log("--> adminCtrl.deleteStory");
   
    req.flash("success_msg", "Story Deleted Successfully");
    res.redirect("/admin/story");
};

module.exports = adminCtrl;