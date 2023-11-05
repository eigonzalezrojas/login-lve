$(function(){
    
    var  userInput   = $('#userInput'),
         passInput   = $('#passInput'),
         userLabel   = $('#user label'),
         passLabel   = $('#Pass label');
         
     // Username Input  Move When Mouse Focus..    
    userInput.on('focus', function(){
        userLabel.addClass('userLabel'); 
    });
    userInput.on('blur', function(){
         if(userInput.val().length > 0 ){
             userLabel.addClass('userLabel');
         }else{
           userLabel.removeClass('userLabel');  
         }
          
    });
    
    // Password Input  Move When Mouse Blur..    
    passInput.on('focus', function(){
        passLabel.addClass('passLabel'); 
    });
    passInput.on('blur', function(){
         if(passInput.val().length > 0 ){
             passLabel.addClass('passLabel');
         }else{
           passLabel.removeClass('passLabel');  
         }
    });
 });