//Bài 1
function findOppositeNumber(n, inputNumber)
{
    let result = ''
    if(inputNumber < n && n % 2==0 && n<=20 && n >= 4 && inputNumber >= 0){
    if (inputNumber > (n / 2))
        result = (inputNumber - (n / 2));
        result = (inputNumber + (n / 2));
    
    return result;
    
    }
    console.log(result)
    console.log(inputNumber)
}     
console.log(findOppositeNumber(16,2))


// Bài 2
// const str1 = document.getElementById("str1");
// const str2 = document.getElementById("str2");
function mergeStr(str1,str2){ 
    let n = str2.length;
    
    if(str1.length > str2.length){
      n = str1.length;
    }
    let result = '';
    for(let i = 0; i < n; i++){
      if(str1[i]){
        result += str1[i];}
      
      if(str2[i])
        result += str2[i];
      
    }
    return result;
  }
  console.log(mergeStr("dungngo","12345"))
  