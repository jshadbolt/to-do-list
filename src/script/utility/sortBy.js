function sortBy(array, prop, method) {

    return array.slice().sort((a, b) => {
        const propA = a[prop]
        const propB = b[prop]

        return method(propA, propB)
    })

}

export default sortBy;

