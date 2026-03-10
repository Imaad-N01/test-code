// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop Value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
        
        
//     }
    
    
// }

// let newNums = [1,3,4,5,6,7,8,9,2,]
// const myNums = newNums.filter((num) => num >= 4 )
// console.log(myNums);
 
// const nums = [1,2,3,4,5,6,7,8]
// const total = nums.reduce(function(prv ,currval){
//     console.log(`prv: ${prv} and currval: ${currval}`);
    
//     return prv + currval
// },0)
// console.log(total);

// const total = nums.reduce((prv , curr)=>(prv + curr),0)
// console.log(total);
const myCartProduct = [
    {
    courseName : "JavaScript course",
    price : 999
    },
    {
    courseName : "Java course",
    price : 1999
    },
    {
    courseName : "Python course",
    price : 2999
    },
    {
    courseName : "React course",
    price : 3999
    },
]
console.table(myCartProduct);
const totalItems = myCartProduct.reduce((curr,item) =>( curr + item.price),0)
console.log(`The Total Bill of the Items in Your Cart is:₹ ${totalItems}`);
