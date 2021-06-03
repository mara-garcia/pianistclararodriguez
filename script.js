const openBtn = document.querySelector('.open-nav')
const closeBtn = document.querySelector('.close-nav')
const nav = document.querySelector('.nav-bar')

closeBtn.addEventListener('click', () => {
    nav.classList.remove('navigation-open')
})

openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open')
})

// ALBUMS PAGE

const albumHeader = document.querySelectorAll('.album-header').forEach(header => {
    header.addEventListener('click', event => {
        let content = header.nextElementSibling
        if (content.style.maxHeight) {
            content.style.maxHeight = null
            content.style.paddinTop = '0px'
            content.style.paddinBottom = '0px'
        } else {
            content.style.maxHeight = content.scrollHeight + 100 + 'px'
            content.style.paddingBottom = 0
        }
    })
})

