const Mail = require('../models/Mail')
const mongoose = require('mongoose')

exports.getMails = async (req, res) => {
    const userEmail = req.email

    try {
        const mails = await Mail.find({ to: userEmail }).sort({_id:-1})

        res.json(mails)
    } catch (error) {
        res.status(404)
            .json({
                message: error.message
            })
    }
}

exports.createMail = async (req, res) => {
    const { to, subject, message, sender } = req.body

    const newMail = new Mail({
        to,
        subject,
        message,
        sender,
        createdAt: new Date().toISOString()
    })

    try {
        await newMail.save()

        res.status(201).json({
            message: 'Email has been sent successfully',
            newMail
        })
    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }
}