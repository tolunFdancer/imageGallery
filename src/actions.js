export const IMAGE_SELECTED = 'IMAGE_SELECTED';
const LOAD_IMAGES = 'LOAD_IMAGES';

export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image: image
    }
}

export function loadImage() {
    return {
        type: LOAD_IMAGES
    }
}