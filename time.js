
function doSamthing() {
    console.log(4444)
}
console.log(2222)
console.log(3333)

setTimeout(doSamthing, 11000)
console.log(5555)


setTimeout(function() {
    console.log('i am javascript developer ')
},12000)

setTimeout(()=>{
    console.log('i am a python developer ')
},13000)


// setInterval(()=>{
//     console.log('hello setInterval how are u')
// }, 1000, 5000)