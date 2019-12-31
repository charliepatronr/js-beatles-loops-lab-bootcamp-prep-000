// add solution here
let arr = [];
function theBeatlesPlay(musicianArr, instArr){
for (let i = 0 ; i < musicianArr.length; i ++){
   arr.push(musicianArr[i] + " plays " + instArr[i]);
}
return arr;
}


let i  = 0; 
var newArr =[];


function johnLennonFacts(arr){
   while(i < arr.length){
      newArr.push(arr[i].concat("!!!"));
      i++;
   }
return newArr;
}

