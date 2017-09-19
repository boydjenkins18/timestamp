var stuffUnix=document.querySelector('#myUnixVal');
var unixButton=document.querySelector('#unixSubmit');
var dateButton=document.querySelector('#dateSubmit');



dateButton.addEventListener('click',function(){

  var monthsSelect=document.querySelector('#monthsSelect');
  var yearSelect=document.querySelector('#yearSelect');
  var daySelect=document.querySelector('#daySelect');
  var monthsValue = monthsSelect.options[monthsSelect.selectedIndex].value;
  var daysValue=daySelect.options[daySelect.selectedIndex].value;
  var yearsValue=yearSelect.options[yearSelect.selectedIndex].value;

  var fullDate=monthsValue+' '+daysValue+', '+yearsValue;

  window.open('https://stormy-mountain-11407.herokuapp.com/home/'+fullDate);



});

unixButton.addEventListener('click',function(){

  if(!Number(stuffUnix.value)){
    alert('Please fill in the field with only numeric numbers');
  }else{
    window.open('https://stormy-mountain-11407.herokuapp.com/home/'+stuffUnix.value);
  }



});


for (var i=1901;i<=2017;i++){
  $('#yearSelect').prepend('<option value="'+i+'">'+i+'</option>');
}

for (var i=2;i<=31;i++){
  $('#daySelect').append('<option value="'+i+'">'+i+'</option>');
}
