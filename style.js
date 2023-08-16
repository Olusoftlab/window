const btnEl=document.getElementById('button')
const popEl=document.querySelector('.pop-up')
const iconEl=document.getElementById('icon')
const bodyEl=document.querySelector('body')



btnEl.addEventListener('click', ()=>{
    popEl.classList.remove('active')
    bodyEl.classList.add('active-body')
})

iconEl.addEventListener('click', ()=>{

    popEl.classList.add('active')
    bodyEl.classList.remove('active-body')

})