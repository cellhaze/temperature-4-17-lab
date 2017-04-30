$('#convert').on('click', function() {

//var button = document.body.getElementsByTagName('button');
//button.onclick = function(){
//    alert("clicked");
//}

function convertTemp() {
    
    var temperature = $('#temperature').val;
    var tempUnit = $('#temp-unit').val;
    
  if ( tempUnit === "C") {
      console.log("done1!");
  (temperature * 9/5) + 32;
      document.body.innerHTML('<div><p>Your temperature converts to ' + temperature + ' degrees ' + tempUnit + ' .');
}else{
    console.log("done2!");
  (temperature-32) * 5/9;
    document.body.innerHTML('<div><p>Your temperature converts to ' + temperature + ' degrees ' + tempUnit + ' .');
  }
};
    
convertTemp();    
            
});

//convertTemp(50,"C");




// (C × 9/5) + 32 = F;
// (F − 32) x 5/9 = C;

