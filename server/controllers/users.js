const User = require('../models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signIn = async (req, res) => {
    const {
        email,
        imageUrl
    } = req.body

    try {
        const existingUser = await User.findOne({
            email
        })

        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(email+imageUrl, 12)

            const newUser = new User({
                photoUrl: imageUrl,
                email,
                password: hashedPassword,
            })

            await newUser.save()
        }

        const token = jwt.sign({
            email,
            imageUrl
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        return res.json({
            token,
            user: {
                email,
                imageUrl
            }
        })
    } catch (error) {
        res.status(500)
            .json({
                message: 'Something went wrong, please try again'
            })
    }
}