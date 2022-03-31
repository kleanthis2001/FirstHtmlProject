'use strict';
{
{
 var btn = document.querySelector("button");
 var result = document.querySelector("span");

  btn.addEventListener('click',function(ev){
      
    var pred = document.querySelectorAll('input[type="radio"]:checked');
    var parameter1 = pred[0].value;
    var parameter2 = pred[1].value;
    var parameter3 = pred[2].value;


 
    var resultis=0;
    //change();
    resultis = parseInt(parameter1) +parseInt(parameter2)  + parseInt(parameter3);
    result.innerHTML = resultis + "$";
}); 
}

/*function change(){
var photos = document.querySelector("img");
var epilogh = document.querySelector('input[type="radio"]:checked');
    
if(epilogh.value==="90")
    photos.setAttribute('src', 'CZ2636.jpg');
else if(epilogh.value==="85")
    photos.setAttribute('src', 'CZ3197.jpg');
else
    photos.setAttribute('src', 'CZ2635_1.jpg');
}*/

{
    var photos1 = document.querySelector("img");
    var pred1 = document.querySelectorAll('input[type="radio"]');
    pred1[0].addEventListener("click",function(ev){
        photos1.setAttribute('src', 'CZ2636.jpg');
    });

    pred1[1].addEventListener("click",function(ev){
        photos1.setAttribute('src',"CZ3197.jpg");
    });

    pred1[2].addEventListener("click",function(ev){
        photos1.setAttribute('src', 'CZ2635_1.jpg');
    });
}

}