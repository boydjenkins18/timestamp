var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var port=process.env.PORT || 8000;
var ip=process.env.IP;
var app=express();


//app setup
app.use(bodyParser.json());
app.use(cors());
app.use('/public',express.static(process.cwd()+'/public'));
app.set('view engine','ejs');


//routes

app.get('/home',function(req,res){
  res.render('pages/home');
});


app.get('/home/:date',function(req,res){

  var date=req.params.date;
  var dateVal=new Date(date);
  var unixDate;
  var naturalDate;
  var dateOptions={
    year:'numeric',
    month:'long',
    day:'numeric'
  };
  if(isNaN(date)){
    naturalDate=dateVal.toLocaleDateString('en-us',dateOptions);
    unixDate=dateVal/1000;
  }else{
    unixDate=Number(date);
    naturalDate=new Date(date*1000).toLocaleDateString('en-us',dateOptions);
  }


  res.json({unix: unixDate , natural: naturalDate});
});

//start Server
app.listen(port,ip,function(){
  console.log('Server is listening on port '+port+'...');
});
