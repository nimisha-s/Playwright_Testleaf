function numberType(num){
    if(num>0){
        return "positive";
    } else if(num<0){
        return "negative";
    } else {
        return "zero";
    }
}
let num=10;
numberType(num)
console.log(num+" is a "+numberType(num)+" number");