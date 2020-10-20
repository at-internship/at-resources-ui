const teamsCtrl = {};

teamsCtrl.renderTeamList = (req, res) => {
    res.render("teams/teamList");
};

module.exports = teamsCtrl;