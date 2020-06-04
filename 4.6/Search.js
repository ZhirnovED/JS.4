let div = document.querySelector('#di');
let arr = [];
function GetRandom(n=100,i=0){
    if(arr.length !== n){
        if(i==0)
            arr[i] = i;
        else
            arr[i] = Math.ceil(arr[i-1] + 1 + Math.random()*10) ;
            GetRandom(n,++i);        
    }    
}
GetRandom();
div.innerText = arr;
let result = document.querySelector('#result');
let button = document.querySelector('#but');
let znach = document.querySelector('#znach');
button.addEventListener('click', function(){
    function binarySearch(s,left=0,right=arr.length - 1){ 
        if(s < arr[left] || s > arr[right]){
            return -1;
        }
        else if(arr[left] == s ){
            return left;
        }
        else if(arr[right] == s ){
            return right;
        }
        else if (arr[Math.round((left + right)/2)] == s){
            return Math.round((left + right)/2);
        }
        else if (arr[Math.round((left + right)/2)] < s){
            left = Math.round((left + right)/2) + 1;
        }
        else{
            right = Math.round((left + right)/2)-1;
        }
    return binarySearch(s,left,right);
    }  
  result.value = binarySearch(znach.value);

});










