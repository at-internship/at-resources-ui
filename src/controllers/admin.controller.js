const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
//const ssoServiceAPI = require("../services/at-sso-api.service");
const resourceServiceApi = require("../services/at-resource-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-RESOURCES - Admin - Story list
adminCtrl.renderStoryList = async (req, res) => {
    let story = [];
    try{
        const responseStoryList = await resourceServiceApi.getStoryList();
        if (responseStoryList === null || responseStoryList === undefined){
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> adminCtrl.renderStoryList");
            story = responseStoryList.data;
        }
    } catch(err) {
        console.error(err.message);
    }  finally {
        res.render("admin/story/list-story", { story});
    }
};

module.exports = adminCtrl;