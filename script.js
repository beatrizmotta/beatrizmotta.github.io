const logo = document.querySelector('.logoName')
const $arrow = $('.arrow')
const arrow = $('.arrow').get(0)

const $content = $('.content')
const $projects = $('.projects')
const $details = $('.details')

function onLoad() {
    window.onload = () => {
        $details.hide()
        $arrow.hide()
        $content.hide()
        $projects.hide()
        setTimeout(() => {
            logo.classList.toggle('highlighted')
        }, 700);
        setTimeout(() => {
            $arrow.show(1000)
        }, 1900);
    }
}

function showContent() {
    arrow.addEventListener('click', () => {
        $content.slideToggle(1000)
        setTimeout(() => {
            $projects.slideDown(1400)
        }, 1500);
    })
}

function showProjectDetails() {
    $projects.children().each((i, e) => {
        $(e).on('mouseenter', () => {
            $($details.get(i)).slideDown(700)
        })
        $(e).on('mouseleave', () => {
            $($details.get(i)).slideUp(700)
        })
    })
}


onLoad()
showContent()
showProjectDetails()