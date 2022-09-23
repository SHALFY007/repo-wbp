import("./main.scss")

import { grawGalleryItem } from './item'
import items from './items'

const galleryRootElement = document.getElementById('gallery')

items.map(item => galleryRootElement.appendChild(grawGalleryItem(item)))