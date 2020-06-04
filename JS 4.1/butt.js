window.onload = function(){

function clickbut(){
    let i = 0;
    return function(){
        return i++;
        console.log(i);

    }
}
butt = document.getElementsByClassName("myButton");
for(let j=0; j<=butt.length; j++){
    console.log(butt[j])
    let a = clickbut();
    butt[j].addEventListener('click', function(){

        butt[j].innerHTML = "число кликов: " + a();

    });
}
    
}