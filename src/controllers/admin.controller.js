const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndexAdmin = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-RESOURCES - Admin - Story list
adminCtrl.renderStoryList = async (req, res) => {
    const stories = [];
    try{
        const responseStoryList = await ssoServiceAPI.getAllStories();
        if (responseStoryList === null || responseStoryList === undefined){
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> adminCtrl.renderStoryList");
            stories = responseStoryList.data;
        }
    } catch(err) {
        console.error(err.message);
    }  finally {
        res.render("admin/story/index", { stories});
    }
};

// AT-RESOURCES - Admin - Render Add Story Form
adminCtrl.renderAddStoryForm = (req, res) => {
    res.render("admin/story/add-story");
};

// AT-RESOURCES - Admin - Add Story
adminCtrl.addStory = async(req, res) => {
    const { id, sprint_id, user_id, prority, name, description, aceptance_criteria, story_points, progress, start_date, due_date, create_date, status } = req.body;
    let stories;
    let request = {
      id,
      sprint_id,
      user_id,
      prority: parseInt (prority),
      name,
      description,
      aceptance_criteria,
      story_points: parseInt (story_points),
      progress: parseInt (progress),
      start_date: new Date (start_date),
      due_date: new Date (due_date),
      create_date: new Date (create_date),
      status: parseInt (status),
    };
    await ssoServiceAPI.addStory(request).then(result => {
        console.log(result);
        stories = result;
    });
    req.flash("success_msg", "Story Added Successfully");
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