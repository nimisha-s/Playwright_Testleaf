let number=[12,6,24,56,37,6,23,5,12,80,45,36,89]
for(let i=0;i<number.length;i++){
    for(let j=i+1;j<number.length;j++){
        if(number[i]==number[j]){
            console.log("Duplicate number is: "+number[i])
        }
    }
}
