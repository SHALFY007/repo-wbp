export function grawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = 'galery-item'

    /*const imgEl = document.createElement('img')
    imgEl.classList = 'gallery-item-img'
    imgEl.setAttribute('src', item.resourse)*/
    const El = document.createElement(`${item.tag}`)
    El.classList = 'gallery-item-img'
    El.setAttribute('src', item.resourse)
    El.controls = true

    const titleEl = document.createElement('span')
    titleEl.classList = 'gallery-item-title'
    titleEl.textContent = item.title

    itemEl.appendChild(El)
    itemEl.appendChild(titleEl)

    return itemEl
}