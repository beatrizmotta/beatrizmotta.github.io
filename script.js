const logo = document.querySelector('.logoName')
const arrow = document.querySelector('.arrow')
const maincontent = document.querySelector('.content')

function onLoad() {
    window.onload = () => {
        setTimeout(() => {
            logo.classList.toggle('highlighted')
        }, 700);
        setTimeout(() => {
            arrow.classList.toggle('hidden')
        }, 1900);
    }
}

function showContent() {
    arrow.addEventListener('click', () => {
        maincontent.classList.toggle('before')
        maincontent.classList.toggle('hidden')
        setTimeout(() => {
            maincontent.classList.toggle('full')
        }, 500);
    })
}


onLoad()
showContent()