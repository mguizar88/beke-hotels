const getElementPosition = (element) => {
    const rect = element.getBoundingClientRect()
    return rect
}

export default getElementPosition