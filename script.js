const barEle = document.querySelector('.bars')
const hideEle = document.querySelector('.hide')
const closeEle = document.querySelector('.close')

barEle.addEventListener('click',()=>{
  hideEle.style.display = 'block'
})
closeEle.addEventListener('click',()=>{
    hideEle.style.display = 'none'
})