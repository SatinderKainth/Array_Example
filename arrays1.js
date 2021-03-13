// Print each array value and the sum

var testArr = [6,3,5,1,2,4];
var sum =0;
for(var i=0; i<testArr.length;i++){
    sum+=testArr[i];
    console.log(`the index value of testArr is ${testArr[i]}, sum : ${sum}`)
    }


    //Output

the index value of testArr is 6, sum : 6
the index value of testArr is 3, sum : 9
the index value of testArr is 5, sum : 14
the index value of testArr is 1, sum : 15
the index value of testArr is 2, sum : 17
the index value of testArr is 4, sum : 21


//Multiply the value in the array by array position

var testArr = [6,3,5,1,2,4];
for(i=0;i<testArr.length;i++){
testArr[i]=testArr[i]*i;}
console.log(testArr)
