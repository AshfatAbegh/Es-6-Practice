function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 20;
    return num1 + num2;
}
const total=add(15,1);
console.log(total);