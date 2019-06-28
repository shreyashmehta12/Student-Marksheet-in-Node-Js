var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/studentinterface', function(req, res, next) {
  res.render('student');
});

router.get('/result', function(req, res, next) {
  console.log(req.query)
  em=parseInt(req.query.n6);
  hm=parseInt(req.query.n5);
  mm=parseInt(req.query.n7);
  pm=parseInt(req.query.n8);
  cm=parseInt(req.query.n9);

  total=em+hm+mm+pm+cm
  per=total*0.2

  res.render('display',{RollNo:req.query.n1,StudentName:req.query.n2,FatherName:req.query.n3,Gender:req.query.gen,Birthday:req.query.bd,SchoolName:req.query.n4,EnglishMarks:req.query.n6,HindiMarks:req.query.n5,MathsMarks:req.query.n7,PhysicsMarks:req.query.n8,ChemistryMarks:req.query.n9,total:total,per:per});
});


module.exports = router;
