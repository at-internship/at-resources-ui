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
// adminCtrl.renderStoryList = async (req, res) => {
//     try{
//         const responseStoryList = await resourceServiceApi.getStoryList();
//         console.log("--> adminCtrl.renderStoryList");
//         const storys = responseStoryList.data;
//         res.render("/admin/story/list-story", { storys });
//     } catch {
//         console.error(err.message);
//         res.render("/admin/story/list-story", { storys });
//     }
// };

adminCtrl.renderStoryList = async (req, res) => {
    res.render("/admin/story/list-story");
    console.log("story")
};

module.exports = adminCtrl;