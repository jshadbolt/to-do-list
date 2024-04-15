function singleInstance(selector, callBackFn) {

    // Get error element
    const existing = document.getElementsByClassName(selector);

    // If it already exists
    if (existing && existing.length > 0) {
        existing.remove()
        return;
    } else {
        callBackFn()
    }
}



export default singleInstance;