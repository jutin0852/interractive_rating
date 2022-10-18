var rate=document.getElementById('rate');
var rates=document.getElementsByClassName('rate');
var second=document.getElementById('second');
var first=document.getElementById('first');
var current=document.getElementsByClassName('active');
var five=document.getElementById('five')
for(var x=0; x<rates.length; x++){
    rates[x].addEventListener('click',function(e){
        if(current.length>0){
            current[0].className=current[0].className.replace(" active","")
        }
        e.target.className+=" active"
    })
}
function submit(){
    if(current.length>0){
        first.style.display="none";
        second.style.display="block";
        five.innerHTML="you selected "+current[0].textContent+" out of 5"
    }
}