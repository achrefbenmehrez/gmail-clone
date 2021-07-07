const express = require("express");
const {
    signIn,
    signUp
} = require("../controllers/users");
const router = express.Router();

router.route('/signin')
    .post(signIn)

module.exports = router