const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
//const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};
// AT-RESOURCES - Admin - Render Story List
adminCtrl.renderStoryList = async(req, res) => {
    try {
        const responseStory = await resourcesServiceAPI.getAllStories();
        console.log("---> adminCtrl.renderStoryList.getAllStories");
        //console.log(responseStory.data);
        const story = responseStory.data;
        res.render("admin/story/index", { story });
    } catch (err) {
        console.error(err.message);
        res.render("admin/story/index");
    }
};
// AT-RESOURCES - Admin - Render Add Story Form
adminCtrl.renderAddStoryForm = (req, res) => {
    res.render("admin/sroty/add-story");
};

// AT-RESOURCES - Admin - Add Story
adminCtrl.addStory = async(req, res) => {
    const { title, description, status, category, img } = req.body;
    let stories;
    let request = {
        title,
        description,
        category: category,
        img,
        status: parseInt(status),
    };
    await resourcesServiceAPI.addStory(request).then(result => {
        console.log(result);
        stories = result;
    });

    res.redirect("/admin/story");
};

// AT-RESOURCES - Admin - Render Edit Story Form
adminCtrl.renderEditStoryForm = (req, res) => {
    console.log("--> adminCtrl.renderEditStoryForm");
    res.render("admin/story/edit-story");
};

// AT-RESOURCES - Admin - Update Story
adminCtrl.updateStory = (req, res) => {
    // Redirect
    req.flash("success_msg", "Story Updated Successfully");
    res.redirect("/admin/story");
};

// AT-RESOURCES - Admin - Delete Story
adminCtrl.deleteStory = (req, res) => {
    const errors = [];

    // Redirect
    req.flash("success_msg", "Story Deleted Successfully");
    res.redirect("/admin/Story");
};

module.exports = adminCtrl;