const express = require('express');
const router = express.Router();


//POSTS ROUTES

/* GET posts INDEX   /posts */
router.get('/',(req, res, next)=> {
    res.send(" THIS IS THE POSTS INDEX ROUTE ");
  
});

/* GET NEW POSTS FORM  /posts/new */
router.get('/new',(req, res, next)=> {
    res.send(" THIS IS THE NEW POST FORM ");
});

/* POST CREATE POSTS /posts */
router.post('/',(req, res, next)=> {
    res.send(" THIS IS THE CREATE POSTS ");
  
});

/* SHOW POSTS  Route /posts/:id */
router.get('/:id',(req, res, next)=> {
    res.send(" THIS IS THE SHOW PAGE  ");
});

/* GET EDIT POSTS FORM  Route /posts/:id/edit */
router.get('/:id/edit',(req, res, next)=> {
    res.send(" THIS IS THE EDIT POST FORM  ");
});

/* PUT UPDATE POSTS  Route /posts/:id */ //USE Method-override to change ot PUT
router.put('/:id',(req, res, next)=> {
   res.send(" THIS IS THE EDIT POST PAGE  ");
});

/* DELETE DESTROY POSTS  Route /posts/:id *///Uses MEthod-override  PUT
router.delete('/:id',(req, res, next)=> {
    res.send(" THIS IS THE DELETE POST ROUTE  ");
});



module.exports = router;


