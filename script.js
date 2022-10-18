var rate=document.getElementById('rate');
var rates=document.getElementsByClassName('rate');
 for(var x=0; x<rates.length; x++){
    rates[x].addEventListener('click',function(){
        var current=document.getElementsByClassName('active');
        if(current.length>0){
        current[0].className=current[0].className.replace(" active","");}
        this.className+=" active";
});
}