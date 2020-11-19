const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
const atResourcesAPI = require("../services/at-resources-api.service");

// AT-RESOURCES - Admin - Index
adminCtrl.renderIndexAdmin = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-RESOURCES - Admin - Story list
adminCtrl.renderStoryList = async(req, res) => {
    let stories = [];
    try {
        const responseStoryList = await atResourcesAPI.getAllStories();
        if (responseStoryList === null || responseStoryList === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            console.log("--> adminCtrl.renderStoryList");
            stories = responseStoryList.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("admin/story/index", { stories });
    }
};

// AT-RESOURCES - Admin - Render Add Story Form
adminCtrl.renderAddStoryForm = (req, res) => {
    res.render("admin/story/add-story");
};

// AT-RESOURCES - Admin - Add Story
adminCtrl.addStory = async(req, res) => {
    console.log("--> adminCtrl.addStory");

    try {
        const {
            story_sprintId,
            story_userId,
            story_priority,
            story_name,
            story_description,
            story_acceptanceCriteria,
            story_storyPoints,
            story_progress,
            story_startDate,
            story_dueDate,
            story_status,
        } = req.body;

        let stories;

        let request = {
            sprintId: story_sprintId,
            userId: story_userId,
            priority: story_priority,
            name: story_name,
            description: story_description,
            acceptanceCriteria: story_acceptanceCriteria,
            storyPoints: parseInt(story_storyPoints),
            progress: parseInt(story_progress),
            startDate: new Date(story_startDate),
            dueDate: new Date(story_dueDate),
            createDate: new Date(),
            status: parseInt(story_status)
        };
        await atResourcesAPI.addStory(request).then(result => {
            console.log(result);
        });

        req.flash("success_msg", "Story Added Successfully");
    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.message;
            req.flash("error_msg", errorMsg);
        }
    }
    res.redirect("/admin/story");
};

// AT-RESOURCES - Admin - Render Edit Story Form
adminCtrl.renderEditStoryForm = async(req, res) => {
    console.log("--> adminCtrl.renderEditStoryForm");
    //res.render("admin/story/edit-story");

    let storyId = req.params.id;
    atResourcesAPI.getStoryById(storyId);

    // Temporary code to retrive information about the course

    let responseStories = await atResourcesAPI.getAllStories();

    storyDetails = responseStories.data.filter(function(c) { return c.id == storyId; });

    console.log("One story found", storyDetails[0]);

    // ---

    res.render("admin/story/edit-story", storyDetails[0]);
};

// AT-RESOURCES - Admin - Edit Story
adminCtrl.updateStory = async(req, res) => {
    console.log("--> adminCtrl.updateStory");

    try {

        const story_id = req.params.id;
        if (!story_id) {
            req.flash("success_msg", "not authorized");
            return res.redirect("/admin/story");
        }

        // CONST
        /*const {
            priority,
            name,
            description,
            aceptance_criteria,
            story_points,
            progress,
            start_date,
            due_date,
            create_date,
            status,
        } = req.body;*/

        const {
            story_sprintId,
            story_userId,
            story_priority,
            story_name,
            story_description,
            story_acceptanceCriteria,
            story_storyPoints,
            story_progress,
            story_startDate,
            story_dueDate,
            story_status
        } = req.body;

        const storyErrors = [];

        if (!story_priority) {
            storyErrors.push({ text: "please select a priority" });
        }
        if (!story_name) {
            storyErrors.push({ text: "please type a name" });
        }
        if (!story_description) {
            storyErrors.push({ text: "please type a description" });
        }
        if (!story_acceptanceCriteria) {
            storyErrors.push({ text: "please select a aceptance criteria" });
        }
        if (!story_storyPoints) {
            storyErrors.push({ text: "please select a story points" });
        }
        if (!story_progress) {
            storyErrors.push({ text: "please select a progress" });
        }
        if (!story_startDate) {
            storyErrors.push({ text: "please select a star date" });
        }
        if (!story_dueDate) {
            storyErrors.push({ text: "please select a due date" });
        }
        /*if (!story_createDate) {
            storyErrors.push({ text: "please select a create date" });
        }*/
        if (!story_status) {
            storyErrors.push({ text: "please select a status" });
        }

        if (storyErrors.length > 0) {
            res.render("admin/story/edit-story", {
                storyErrors,
                story_id,
                story_priority,
                story_name,
                story_description,
                story_aceptanceCriteria,
                story_storyPoints,
                story_progress,
                story_startdate,
                story_dueDate,
                story_createDate,
                story_status,
            });
        } else {
            let request = {
                id: story_id,
                sprintId: story_sprintId,
                userId: story_userId,
                priority: story_priority,
                name: story_name,
                description: story_description,
                acceptanceCriteria: story_acceptanceCriteria,
                storyPoints: parseInt(story_storyPoints),
                progress: parseInt(story_progress),
                startDate: new Date(story_startDate),
                dueDate: new Date(story_dueDate),
                createDate: new Date(),
                status: parseInt(story_status),
            };
            await atResourcesAPI.updateStory(request, story_id).then(result => {
                console.log(result);
            });

            req.flash("success_msg", "Story updated Successfully");
        }

    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.message;
            req.flash("error_msg", errorMsg);
        }
    }

    res.redirect("/admin/story");
};

// AT-RESOURCES - Admin - Delete Story
adminCtrl.deleteStory = async(req, res) => {
    console.log("--> adminCtrl.deleteStory");

    try {
        const errors = [];

        let storyId = req.params.id;
        atResourcesAPI.deleteStory(storyId);

        // Redirect
        req.flash("success_msg", "Story Deleted Successfully");
    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.message;
            req.flash("error_msg", errorMsg);
        }
    }
    res.redirect("/admin/story");
};

module.exports = adminCtrl;