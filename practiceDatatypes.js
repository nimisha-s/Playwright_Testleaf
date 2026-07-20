//number, whole number, float, decimal
//-(2^53-1) to (2^53-1)
var phoneNumber=9916273558
console.log(phoneNumber);
console.log(typeof phoneNumber);

//string- represented using,"",'',``(the key above your tab key-backticks)
var empName="Nimisha S"
console.log(empName); //
console.log(typeof empName);

//boolean-> either it can be true or false
var hasPlaywright=true
console.log(hasPlaywright);  //true
console.log(typeof hasPlaywright) //boolean

//undefined-> undefined means a value has not been assigned yet and may be assigned later at runtime.

var accountNumber
console.log(accountNumber);   //undefined
console.log(typeof accountNumber); //undefined

//null->null means the value is intentionally set to "no value" or "empty."

var landLine=null
console.log(landLine)  //null
console.log(typeof landLine) //object

//bigint - bigint is used to store very large integers beyond JavaScript's Number limit (2^53 - 1).

var transactionID=12345678910111247n //denoted by n at the end of the number
console.log(transactionID)
console.log(typeof transactionID)