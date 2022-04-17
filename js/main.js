const headerMenuItems = document.querySelectorAll('.header-menu-item')
const closeBtn = document.querySelector('.header-menu-close img')
const headerMenu = document.querySelector('.header-menu')
const headerBtn = document.querySelector('.header-btn')
const overlay = document.querySelector('.overlay')

headerMenuItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active')
    })
})

closeBtn.addEventListener('click', () => {
    headerMenu.style.transform = 'translateX(300px)'
    overlay.style.display = 'none'
})

headerBtn.addEventListener('click', () => {
    headerMenu.style.transform = 'translateX(0)'
    overlay.style.display = 'block'
})
