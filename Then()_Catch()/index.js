let p1 = new Promise((resolve, reject)=>{
  console.log("Promise is pending")
  setTimeout(()=>{
    // console.log("Promise fulfilled")
    resolve(true)
    
  },4000)
})

let p2 = new Promise((resolve, reject)=>{
  console.log("Promise is pending")
  setTimeout(()=>{
    // console.log("Promise rejected")
    reject(new Error("I am new Error"))
  },2000)
})

// console.log(p1,p2)

//To get the value
p1.then((value)=>{
  console.log(value)
})

//To catch the error
// p2.catch((error)=>{
//   console.log("Some Error occur in p2")
// })


//useing then

p2.then((value)=>{
  console.log(value)
},(error)=>{
  console.log(error)
})



