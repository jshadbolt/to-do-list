function isEnterKey(event) {
    event.preventDefault()
    return event.key === 'Enter';
}

export default isEnterKey;