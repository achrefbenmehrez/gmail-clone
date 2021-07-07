const express = require("express");
const { getMails, createMail } = require("../controllers/mails");
const router = express.Router();

const auth =  require('../middleware/auth')

router.get('/', auth, getMails)
router.post('/', auth, createMail)

module.exports = router