/*import hamburgerMenu from "./index_dom"
const doc = document 
hamburgerMenu(doc)

function loadPage(){
    const document.querySelector('.panel-btn')
    const panel = document.querySelector('aside.menu')
    hamburgerMenu()
}
document.addEventListener('Load', hamburgerMenu)*/

window.addEventListener('DOMContentLoaded',() ==> {
const panelbtn = document.querySelector('panel-btn')
const panel = document.querySelector('aside.menu')

panelbtn.onClick = () ==> {

    panel.classList.toggle('visually-hidden')

}

})

