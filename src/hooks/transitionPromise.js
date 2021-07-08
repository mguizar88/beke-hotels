const transitionPromise = (element, property, value) => {
    return new Promise( ( resolve, reject ) => {
        if(property == null || value == null) reject('Missing parameters')
        const onTransitionEnd = () => {
            element.removeEventListener('transitionend', onTransitionEnd)
            resolve(element)
        }
        element.addEventListener('transitionend', onTransitionEnd)
        element.style[property] = value
    })
}

export default transitionPromise