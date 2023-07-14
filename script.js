const btn = document.querySelector('button')
const body = document.querySelector('body')
const color = ['blue','black','orange','grey','silver','purple']
body.style.backgroundColor = 'green';
document.addEventListener('click',function(){
    const a = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[a];
})