const express = require('express');
const router = express.Router();
const showdown = require('showdown'); 

router.get('/', (req,res) => {
    res.render('home');
})

router.post('/blog', (req,res) => {
    console.log(req);
    var converter = new showdown.Converter();
    var md = req.body.blogBody;
    var html = converter.makeHtml(md);
    res.send(html);
})

module.exports = router;