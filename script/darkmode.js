let darkmode = localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch')

const ondarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const offdarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') ondarkmode()

themeswitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode != "active" ? ondarkmode():offdarkmode()
})

let darkicon = localStorage.getItem('darkmode')