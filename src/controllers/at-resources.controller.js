const rscCtrl = {};

// AT-RESOURCES - Index/Dashboard
rscCtrl.dashboard = async(req, res) => {
    console.log("--> rscCtrl.dashboard");
    res.render("dashboard");
};


// AT-RESOURCES - Index/Backlog
rscCtrl.renderBacklog = async(req, res) => {
    console.log("--> rscCtrl.renderBacklog");
    res.render("backlog");
};

module.exports = rscCtrl;