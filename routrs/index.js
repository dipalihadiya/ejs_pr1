const  express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
   console.log(__dirname);
   res.render('pages/about');
   
})

router.get('/contact', (req, res) => {
   console.log(__dirname);
   res.render('pages/contact');
   
})
router.get('/services', (req, res) => {
   console.log(__dirname);
   res.render('pages/services');
   
})
router.get('/blog', (req, res) => {
   console.log(__dirname);
   res.render('pages/blog');
   
})
router.get('/blog-2', (req, res) => {
   console.log(__dirname);
   res.render('pages/blog-2');
   
})
router.get('/blog-details', (req, res) => {
   console.log(__dirname);
   res.render('pages/blog-details');
})



module.exports = router;