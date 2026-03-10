const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Promise ");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Async Promise Resolved")
})
// ***************************************************************************
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Promise Part 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async Promise Part 2 Resolved");
    
})
const promiseBro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Imaad",password:12345})
        }else{
            reject('Something went Wrong')
        }
    },1000)
})
promiseBro.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The Promise is either Resolved or Rejected')
})
// ============================================================
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:12345})
        }else{
            reject('Something Js went Wrong')
        }
    },1000)
})
async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}
consumePromise()

async function getAllUser(){
    try {
        const responseUser = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responseUser.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
        
    }
    
}
getAllUser()
