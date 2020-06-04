let number=document.getElementById('number');
let result=document.getElementById('result');
let button = document.getElementById('but');
button.addEventListener('click', function(){
    function recursia(numS) {
		if (numS.length==1){
			return numS;
		} 
        return recursia(Array.from(numS).reduce((a,b)=>+a + +b).toString());

}		
result.innerText = recursia(number.value);		
});

			