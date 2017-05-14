$('#convert').on('click', function() {

//var button = document.body.getElementsByTagName('button');
//button.onclick = function(){
//    alert("clicked");
//}
    
  

    
function convertTemp(temp, tempUnit) {
    
    var temp = $('#temp').val();
    var tempUnit = $('#temp-unit').val();  
    
  if ( tempUnit === "C") {
      console.log("done1!");
    newTemp = Math.floor((temp * 9/5) + 32);
      document.getElementById('message').innerHTML = '<div><p>Your temperature converts to ' + newTemp + '&deg;' + 'F </p></div>';
      
      bgSwap(newTemp);
      
}else{
    console.log("done2!");
  newTemp = Math.floor((temp-32) * 5/9);
    document.getElementById('message').innerHTML = '<div><p>Your temperature converts to ' + newTemp + '&deg;' + 'C </p></div>';
    
    bgSwap(temp);
    
  }
};
    
convertTemp();    
            
});

function bgSwap(num) {
    if ( num < 40 ) {
        document.getElementById("right-side").style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/564x/59/85/03/598503b3b961afbbe2fbd236f4d36dd6.jpg)";
        
        document.getElementById("message").style.textShadow = "5pt 3pt 5pt #000aff";
        
        document.getElementById("convert").style.animationName = "color-change-cool";
        
        
    } else if ( num > 75 ) {
        document.getElementById("right-side").style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/564x/cd/44/f4/cd44f4373fbbf40adabe9e01ac68f5c2.jpg)";
        
        document.getElementById("message").style.textShadow = "5pt 3pt 5pt #ff001d";
        
        document.getElementById("convert").style.animationName = "color-change-warm";
    }
}

//convertTemp(50,"C");

//#000aff


// (C × 9/5) + 32 = F;
// (F − 32) x 5/9 = C;

