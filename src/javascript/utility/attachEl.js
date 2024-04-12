function attachEl(source, target, position) {
    switch (position) {
        case 'before': {
            target.parentNode.insertBefore(source, target);
            break;
        }
        case 'after': {
            if (target.nextSibling) {
                target.parentNode.insertBefore(source, target.nextSibling);
            } else {
                target.parentNode.appendChild(source)
            }
        }
        case 'append': {
            target.appendChild(source)
        }
    }
    // USAGE:
    // attach(table, div, 'before');
}

export default attachEl;