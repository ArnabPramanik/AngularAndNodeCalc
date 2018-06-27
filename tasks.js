var express= require('express');
var router = express.Router();

router.post('/submit_calc', function(req, res, next){
    first_operand = req.body.first_operand;
    operator = req.body.operator;
    second_operand = req.body.second_operand;
    var operation = first_operand + operator + second_operand;

    var result = eval(operation);

    res.json(result);
});
module.exports = router;