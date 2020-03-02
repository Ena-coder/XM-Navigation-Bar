var fixedNavbar = document.getElementById('fixed')
var staticNavbar = document.getElementById('static')
var y = staticNavbar.offsetTop + staticNavbar.offsetHeight
var yy = staticNavbar.offsetTop
var positionY = 0;
function show (){
  fixedNavbar.classList.add('active')
}
function hide (){
  fixedNavbar.classList.remove('active')
}
console.log(y + '----------------');
window.addEventListener('scroll',function(){
  console.log(window.scrollY);
  
  if(window.scrollY >= y){
    show()
  }else{
    hide()
  }
})
// 设定5毫秒到达顶部
var timer = window.setInterval(()=> {
  positionY += 1;
  if(positionY <= yy){
    window.scrollTo(0,positionY)
  }else{
    clearInterval(timer)
  }
},5)