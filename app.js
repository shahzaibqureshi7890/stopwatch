var min=0;
var sec=0;
var msec=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var interval;



function timer()
{
    msec++;

    msecHeading.innerHTML=msec;

    if(msec >= 100)
    {
    sec++;
    secHeading.innerHTML=sec;
    
    msec=0;

    }

    else if(sec >= 60)
    {
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }

}

function start()
{

var but1=document.getElementById('but1');
var but2=document.getElementById('but2');
var but3=document.getElementById('but3');


but1.style.backgroundColor="#007bff";
but2.style.backgroundColor="";
but3.style.backgroundColor="";



but1.disabled="disabled";

but2.disabled="";

but3.disabled="";


interval=setInterval(timer,10);

}


function stop()
{

    
var but1=document.getElementById('but1');
var but2=document.getElementById('but2');
var but3=document.getElementById('but3');

but1.style.backgroundColor="";
but2.style.backgroundColor="#dc3545";
but3.style.backgroundColor="";


but1.disabled="";

but2.disabled="disabled";
    
but3.disabled="";
    
    
clearInterval(interval);

}


function reset()
{

var but1=document.getElementById('but1');
var but2=document.getElementById('but2');
var but3=document.getElementById('but3');


but1.style.backgroundColor="";
but2.style.backgroundColor="";
but3.style.backgroundColor="#ffc107";

but1.disabled="";
   
but2.disabled="";
    
but3.disabled="disabled";
    

min=0;
sec=0;
msec=0;

minHeading.innerHTML=min;
secHeading.innerHTML=sec;
msecHeading.innerHTML=msec;

clearInterval(interval);
   
}