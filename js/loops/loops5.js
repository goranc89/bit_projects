var sum = 0;
var input = 248 ;
var inpstr = input.toString()

for (var i = 0; i < inpstr.length; i++) {
    
      sum += Number(inpstr[i])
    }
  

console.log('Sum of digits in number', input ,'is' , sum);











// var arr = ['2','3','2'];
// var total = 0; 
// for(var i in arr){
//   total += parseInt(arr[i]);
// }console.log(total);

// var value = 225,
//   sum = 0;

// while (value) {
//   sum += value % 10;
//   value = Math.floor(value / 10);
// }

// console.log(sum);