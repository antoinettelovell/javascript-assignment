function printInt(n){ 
    for (var x = 1; x <= n; x++){
        console.log(x);
    }
};
console.log(printlnt(10));










function printlntRev(n){ 
    for (var x = n; x >= 1; x--){
        console.log(x);
    }
};
console.log(printlntRev(10));










function checkInput(x){
    if (typeof x === 'number'){
        return 'number';
    }else if (typeof x === 'string'){
        return 'string';
    }else if (typeof  x === 'boolean'){
        return 'boolean';
    }else{
        return -1;
    }
}
console.log(checkInput(4));









function simpleEvenAdding(num){
    var sum = 0;
    for (var i = 1; i  <= num; i++){
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(simpleEvenAdding(12));









function letterCapitalize(str){
   var splitedArray = str.split(" ");
   var result = "";
    for (var i = 0; i < splitedArray.length; i++){
        result += " " + splitedArray[i][0].toUpperCase()
        + splitedArray[i].slice(1);
  }
  return result.slice(1);
}
console.log(letterCapitalize("hello this is Msimbo"));








function simpleReverse(str){
    var splittedArray = str.split("");
    var result  = "";
    for(var i = splittedArray.length -1; i >= 0; i--){
        result += splittedArray[i];
    }
        return result;
} 
console.log(simpleReverse('Hello World'));








function findDiff(arr){
    // get max number in array
    var max = Math.max.apply(null, arr);
    // get min number in array
    var min = Math.min.apply(null, arr);
        }
    return max - min;    
console.log(findDiff([1,2,40,20,3]));








function timeConvert(num){
var hour = Math.floor(num / 60);
var min = num - (60 * hour);
return hour + ':' + min;
}
console.log(timeConvert(120));










// make a counter
// loop through the long string
//compare part of long with str
// adding 1 counter
// return the counter
function findStr(str, long){
var counter = 0;
for(var i = 0; i <= long.length - str.length; i++){
if(long.slice(i, i + str.length) === str){
    counter++;
    }
    return long.split(str).length
}
}
console.log(findStr("hi", "“dasdhidasdahidashi"));









for(var i = left; i <= right;i++){
var result = [];
if(selfDividing(i)){
    result.push(i)
}
 }
return result;
console.log(selDividing(1,20));


function selfDividing(num){
    var myArray = num.toString().split("");
    for(var i = 0; i < myArray.length;i++){
        if(num %  parseInt(myArray[i]) !== 0){
            return false;
        }
    }
    return true;
}
console.log(selfDividing(12));










function moveZeros(nums){ 
    var result = [];
    var counter = 0;
    for(var i= 0; i < nums.length;i++){
        if(nums[i] === 0){
          counter++
        }else{
            result.push(nums[i]);
        }          
            }
        while(counter > 0){
            result.push(0);
            counter--;        
        }
        return result;
    }
    console.log(moveZeros([1,2,0,0,2,312,33,0,0]));
//make a new array
// make a counter++
//compare mnums[i]with 0
//loop through  given nums array










var sum = 0;
function average(arr){          
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
    }
console.log(average([2,4]));
