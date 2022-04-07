const fileUpload = require('express-fileupload');
const fs = require('fs');

const Pet = require('../models/Pet');
const UserProfile = require('../models/UserProfile');

// Get list of all users
exports.users = async (req, res) => {
    try {
        const profiles = await UserProfile.find({});
        res.status(200).json(profiles);
    } catch (e) {
        res.status(500).json({error: e});
    }
};

// Upload image to Cloudinary & Store in DB
exports.addpet = (req, res) => {
    let fileToUpload = req.files.photoURL;

    fileToUpload.mv('./uploads/' + fileToUpload.name);
    req.body.photo = '/uploads/' + fileToUpload.name;
    Pet.insertMany(req.body, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

// admin edit pet
exports.editpet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, {});
};
