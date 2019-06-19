const express= require('express');
const bodyParser =require('body-parser');
var app = express();
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('*', function (request, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

var util = require('util');
const compliancecheck = require('./middleware/compliancecheck');
//var supplyOrderSearch = require('./supplyOrderSearch')
app.listen(3000,() => console.log('Server started at 3000'));

app.post('/api/storeComplianceDetails_old', (request, response)=>{
    var vendorId = request.body.vendorId;
    var vendorName = request.body.vendorName;
    var month = request.body.month;
    var year = request.body.year;
    var pfdetails = request.body.pfdetails;
    var saldetails = request.body.saldetails;
    var tsdetails = request.body.tsdetails;
    compliancecheck.storeComplianceDetails(JSON.stringify(vendorId), JSON.stringify(vendorName), JSON.stringify(month), JSON.stringify(year),JSON.stringify(pfdetails), JSON.stringify(saldetails), JSON.stringify(tsdetails)).then((result) => {
    res.json({success:true, message: result})
})


})

app.post('/api/storeComplianceDetails', (request,response)=>{
   
    //console.log("Body::"+util.inspect(request.body));
    var body = JSON.stringify(request.body);
    console.log(body.vendorName);
    var vendorId = request.body.vendorId;
    var vendorName = request.body.vendorName;
    var month = request.body.month;
    var year = request.body.year;
    var pfdetails = request.body.pfdetails;
    var saldetails = request.body.saldetails;
    var tsdetails = request.body.tsdetails;
    console.log(vendorId);
    console.log(vendorName);
    console.log(month);
    console.log(year);
    console.log(pfdetails);
    console.log(saldetails);
    console.log(tsdetails);
    compliancecheck.storeComplianceDetails(escape(String(vendorId)),escape(String(vendorName)),escape(String(month)),escape(String(year)),escape(String(pfdetails)),escape(String(saldetails)),escape(String(tsdetails))).then((result) => {
    res.json({success:true, message: result})

})
})



