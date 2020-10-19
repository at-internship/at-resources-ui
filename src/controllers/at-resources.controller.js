const rscCtrl = {};

// AT-RESOURCES - Index/Dashboard
rscCtrl.dashboard = async(req, res) => {
    console.log("--> rscCtrl.dashboard");
    res.render("dashboard");
};



//-----------Sprint-----------//

// Render Sprint
rscCtrl.renderSprint = (req, res) => {
    res.render("sprint");
};

// Render addSprint
rscCtrl.renderAddSprintForm = (req, res) =>{
res.render("/sprint/add");
};

// AddSprint
rscCtrl.addSprint = (req, res) =>{
    //res.render("/sprint/add");
    console.log("Method addSprint");
    };

// Render editSprint
rscCtrl.renderEditSprintForm = (req, res) =>{
   // res.render("/sprint/edit/:id");
    console.log("Method editSprint");
    };

 // Update sprint
rscCtrl.updateSprint = (req, res) =>{
    res.render("/sprint/edit/:id");
    };   

module.exports = rscCtrl;