let check = document.querySelector('#check div')
let body = document.querySelector('body')
check.onclick = ()=>{
    check.classList.toggle('check-active')
    body.classList.toggle('darkMode')
}
