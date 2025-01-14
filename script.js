const btnShare = document.getElementById('shareId')
const showShare = document.getElementById('showshare')
const shap = document.querySelector('.shap')
const usr = document.querySelector('.usr')
btnShare.addEventListener('click',function(){
    showShare.style.visibility = 'visible'
    shap.style.visibility = 'visible'
    usr.style.opacity = '.5'
})