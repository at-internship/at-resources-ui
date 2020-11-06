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

// AT-SSO - Admin - Users - Edit User
adminCtrl.updateStory = async(req, res) => {
    console.log("--> adminCtrl.updateStory");
    const Story_id = req.params.id;
    if (!Story_id) {
        req.flash("success_msg", "not authorized");
       return res.redirect("/admin/story");
    }

    //CONST
    const { priority,
        name,
        description,
        aceptance_criteria,
        story_points,
        progress,
        start_date,
        due_date,
        create_date,
        status } = req.body;
    const storyErrors = [];

    if (!priority) {
        storyErrors.push({text:"please select a priority"})
    }
    if (!name) {
        storyErrors.push({text:"please type a name"})
    }
    if (!description) {
        storyErrors.push({text:"please type a description"})
    }
    if (!aceptance_criteria) {
        storyErrors.push({text:"please select a aceptance criteria"})
     }
     if (!story_points) {
        storyErrors.push({text:"please select a story points"})
    }
    if (!progress) {
        storyErrors.push({text:"please select a progress"})
    }
    if (!start_date) {
        storyErrors.push({text:"please select a star date"})
    }
    if (!due_date) {
        storyErrors.push({text:"please select a due date"})
    }
    if (!create_date) {
        storyErrors.push({text:"please select a create date"})
    }
    if (!status) {
        storyErrors.push({text:"please select a status"})
    }

    if (storyErrors.length > 0) {
        res.render("admin/story/edit-story", {
        storyErrors, 
        Story_id,
        priority,
        name,
        description,
        aceptance_criteria,
        story_points,
        progress,
        start_date,
        due_date,
        create_date,
        status 
        });
    } else {
        req.flash("success_msg", "Story updated Successfully");
        res.redirect("/admin/story");
    };

    // AT-RESOURCES - Admin - Delete Story
adminCtrl.deleteStory = async(req, res) => {
    console.log("--> adminCtrl.deleteStory");
   
    req.flash("success_msg", "Story Deleted Successfully");
    res.redirect("/admin/story");

};

module.exports = adminCtrl;