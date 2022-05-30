var input=document.getElementById('input')
var btn=document.getElementById('btn')
var msg=document.getElementById('msg')


btn.addEventListener('click',()=>{
    var inV=input.value;
    msg.innerHTML += inV
    input.value=''
})