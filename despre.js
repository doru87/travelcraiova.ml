var counter1 = 0;
var number1 = 0;

var counter2 = 0;
var number2 = 0

var counter3 = 0;
var number3 = 0

var interval1 = setInterval(function() {

    document.querySelector(".clienti h1").innerHTML = number1;
    document.querySelector(".clienti hr").style.width = number1 * 0.68 + "px";
    counter1++;
    number1++;
    
    if(counter1 == 145) {
        clearInterval(interval1);
    }
            
},30)


var interval2 = setInterval(function() {

    document.querySelector(".destinatii h1").innerHTML = number2;
    document.querySelector(".destinatii hr").style.width = number2 * 2.85 + "px";
    counter2++;
    number2++;

    if(counter2 == 36) {
        clearInterval(interval2);
    }
        
},90)

var interval3 = setInterval(function() {

    document.querySelector(".orase h1").innerHTML = number3;
    document.querySelector(".orase hr").style.width = number3 * 100 + "px";
    counter3++;
    number3++;
 
    if(counter3 == 2) {
        clearInterval(interval3);
    }
    
},200)






