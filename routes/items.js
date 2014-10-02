var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send([
        {uid: 1, name: 'Diablo 3 - Ultimate Evil', price: '159.90', img: ['images/diablo3-1.jpg', 'images/diablo3-2.jpg', 'images/diablo3-3.jpg'], favorite: true, note: 5},
        {uid: 2, name: 'Bla2', price: '120', img: ['test4.png', 'test5.png', 'test6.png'], favorite: false},
        {uid: 3, name: 'Bla3', price: '130', img: ['test1.png', 'test1.png']},
        {uid: 4, name: 'Bla4', price: '50', img: ['test1.png', 'test1.png', 'test1.png'], favorite: true}
    ]);
});

module.exports = router;
