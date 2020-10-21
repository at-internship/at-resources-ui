const router = require("express"),
Router;

//Controller

const { renderMembersList } = require
('../controllers/members.controller')

// Gets

router.get("/members", renderMembersList);

module.exports = router;