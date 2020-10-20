const router = require("express").Router();

// Controller
const { renderTeamList } = require ('../controllers/teams.controller')


// Gets
router.get("/teams", renderTeamList);

module.exports = router;