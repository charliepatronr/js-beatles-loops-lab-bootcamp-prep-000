// add solution here

function theBeatlesPlay(musicianArr, instArr){
  let arr = [];
for (let i = 0 ; i < musicianArr.length; i ++){
   arr.push(musicianArr[i] + " plays " + instArr[i]);
}
return arr;
}





function johnLennonFacts(arr){
let i  = 0; 
let newArr =[];
   while(i < arr.length){
      newArr.push(arr[i].concat("!!!"));
      i++;
   }
return newArr;
}

