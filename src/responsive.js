let narbar = document.querySelector('#navbar')
let narbarActive = document.querySelector('#navbar-hide')
let narbarNone = document.querySelector('#navbar-none')
narbarActive.onclick = ()=>{
    narbar.classList.add('navbar-active')
}
narbarNone.onclick = ()=>{
    narbar.classList.remove('navbar-active')
}