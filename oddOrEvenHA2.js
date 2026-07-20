function isoddOrEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
let num=10;
isoddOrEven(num)
{
    console.log(num+" is an "+isoddOrEven(num)+" number");
}

/*for (let i = 1; i <= 25; i++) {
    console.log(i + " is " + oddOrEven(i));
        console.log(i+" is an even number")
    }
    else 
    {
        console.log(i+" is an odd number")
    }
}*/