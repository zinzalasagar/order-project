const order = require('../models/order');

const jsonWebData = require('jsonwebtoken');

module.exports.orderStore = async function(req,res){
    // console.log(req.body);
    order.create(req.body,function(err,order){ 

        if(err){
            return res.json({'msg':"record not inserted"});
        }
        if(order){
            return res.json({'msg':"record inserted successfully"});    
        }
     })
}

module.exports.viewData = function(req, res) {

    order.find({},function(err, record) {
        if(err){
            return res.json({'msg':"record not found"});
        }
        return res.json({'record' : record,'msg':"record found"});
    })
}

module.exports.deleteRecord = function(req, res) {

    // console.log(req.params.id);
    // order.delete(req.params.id); 
    order.findByIdAndDelete(req.params.id, function(err, record) {
        if(err){
            return res.json({'msg':"record not found"});
        }
        return res.json({'msg':"record deleted successfully"});
    });
}

module.exports.updateRecord = function(req, res) {
    // console.log(req.body.id);
    var id = req.body.id;
    order.findByIdAndUpdate(id,req.body,function(err, record) {
        if(err) {
            return re.json({'msg':"record not updateRecord"});
        }
        return res.json({'msg':"record updated successfully"});
    })
}

module.exports.TokenGenerat= function(req, res) {

    // console.log(req.body);
    order.findOne({email:req.body.email}, function(err, users) {
        if(err) {
                return re.json({'msg':"email not found"});
        }
        if(!users || users.password != req.body.password)
        {
            // console.log('password not match');
            return res.json({'message' : "password not match"});
        }

        var token = jsonWebData.sign(users.toJSON(), 'order', { expiresIn : 10000});

        return res.json({'token' : token});

    })
}