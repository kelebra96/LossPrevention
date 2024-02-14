const express = require('express');
const router = express.Router();
const CheckListDiario = require('../models/CheckListDiario');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .jpg and .png format allowed!'));
        }
    },
});
router.get('/', async (req, res) => { 
    res.render('home/home');
});


module.exports = router;
    
