const membersCtrl = {};

membersCtrl.renderMemberslist = (req, res) => {
  res.render("members/membersList");
};

module.exports = membersCtrl;
