let genderType="Female"
function printGender()
{
    let color="Brown" //function-scoped
    if (genderType=="Female")
    {
        var age=30
        let color="Pink" //Block-scoped
        console.log(color)
    }
    console.log(age)
    console.log(color)
}
printGender()
console.log(genderType)