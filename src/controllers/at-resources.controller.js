const rscCtrl = {};

// AT-RESOURCES - Index/Dashboard
rscCtrl.dashboard = async(req, res) => {
    console.log("--> rscCtrl.dashboard");
    res.render("dashboard");
};

module.exports = rscCtrl;