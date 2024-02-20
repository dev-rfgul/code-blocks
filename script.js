let blogsBtn= document.querySelector(".blogs-btn")
let brBtn=document.querySelector(".br-btn")
let techBtn=document.querySelector(".tech-btn")
blogsBtn.addEventListener('click',()=>{
    console.log("blogs Btn clicked")
})
brBtn.addEventListener('click',()=>{
    console.log("book review Btn clicked")
})
techBtn.addEventListener('click',()=>{
    console.log("tech Btn clicked")
})

let downloadBtn=document.querySelector(".download")
downloadBtn.addEventListener('click',()=>{
    

})
let project=document.querySelector(".project")
project.addEventListener('click',()=>{
    window.open("https://rfgul785.netlify.app/", "_blank");
    console.log("btn clicked")


})