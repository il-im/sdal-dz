const $switchButton = document.getElementById('switchButton') 
const $magicButton = document.getElementById('magic-button')
const $vector = document.getElementById('vector')

$magicButton.onclick = () => {
    document.body.classList.toggle('dark-mode')
    $magicButton.innerText = document.body.classList.contains('dark-mode') ? "Дневная версия сайта" : "Ночная версия сайта"
   
}