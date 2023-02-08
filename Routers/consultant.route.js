const express = require("express");
const router = express.Router();
const consultantController=require("../controllers/consultant.controller")

router.route("/").get(consultantController.getConsultantInfo).post();

module.exports  = router;
