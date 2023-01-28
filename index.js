function initApp(){
    const wrapper = document.createElement('div')
    wrapper.classList = 'wrapper'
    wrapper.id= 'wrapper'
    const container = document.createElement('div')
    container.classList = 'container'
    container.id = 'container'
    wrapper.append(container)
    return wrapper
}

function renderPhotos() {
    for (let i = 1; i <= 8; i++){
        const container = document.querySelector('.container')
        const imgCard = document.createElement('div')
        imgCard.classList = 'img-card'
        imgCard.id = `img-card-${i}`
        imgCard.style.background = `url('./src/images/img-0${i}.jpg') center/cover no-repeat`
        container.append(imgCard)
    }
}

function closeAllImages() {
    for (let i = 1; i <= 8; i++){
        const img = document.querySelector(`#img-card-${i}`)
        img.classList = 'img-card'
    } 
}

function getActiveImageId() {
    const imgCardsArray = document.querySelectorAll('.img-card')
    for (let i = 0; i < 8; i++){
        if (JSON.stringify(imgCardsArray[i].classList).includes('active')) return imgCardsArray[i].id
    }
    return 'img-card-1'
}

function makeActiveImage(id) {
    closeAllImages()
    const activeImage = document.querySelector(`${id}`)
    activeImage.classList.add('img-card__active')
}

const root = document.querySelector('#root')
root.append(initApp())
renderPhotos()

const container = document.querySelector('#container')
container.addEventListener('click', (event) => {
    makeActiveImage(`#${event.target.id}`)
})

window.addEventListener('wheel', (event) => {
    const activeImageId = getActiveImageId()
    const idArray = activeImageId.split('-')
    const idNum = idArray.at(-1)
    closeAllImages()
    if (event.deltaY > 0) {
        if (idNum === '8') makeActiveImage(`#img-card-1`)
        else  makeActiveImage(`#img-card-${Number(idNum) + 1}`)  
    } else {
        if (idNum === '1') makeActiveImage(`#img-card-8`)
        else  makeActiveImage(`#img-card-${Number(idNum) - 1}`)
    }
})

