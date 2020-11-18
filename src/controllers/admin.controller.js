const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
const atResources = require("../services/at-resources-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndexAdmin = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-RESOURCES - Admin - Story list
adminCtrl.renderStoryList = async (req, res) => {
    let stories = [];
    try{
        const responseStoryList = await atResources.getAllStories();
        if (responseStoryList === null || responseStoryList === undefined){
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> adminCtrl.renderStoryList");
            stories = responseStoryList.data;
        }
    } catch(err) {
        console.error(err.message);
    } finally {
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
    await atResources.addStory(request).then(result => {
        console.log(result);
        stories = result;
    });
    req.flash("success_msg", "Story Added Successfully");
    res.redirect("/admin/story");
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
}

    // AT-RESOURCES - Admin - Delete Story
adminCtrl.deleteStory = async(req, res) => {
    console.log("--> adminCtrl.deleteStory");
   
    req.flash("success_msg", "Story Deleted Successfully");
    res.redirect("/admin/story");

};

module.exports = adminCtrl;