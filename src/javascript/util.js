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
            break; // Add this break statement
        }
        case 'append': {
            target.appendChild(source)
        }
        break; // Add this break statement

    }
    // USAGE:
    // attach(table, div, 'before');
}

function createEl(selector) {
    // Extracting element type
    const matches = selector.match(/^(\w+)/);
    let elementType = 'div'; // Default to div
    if (matches) {
        elementType = matches[0];
        selector = selector.slice(elementType.length); // Remove element type from selector
    }

    // Creating the element
    const element = document.createElement(elementType);

    // Extracting ID and classes
    const idClasses = selector.match(/#([\w-]+)|\.([\w-]+)/g) || [];
    idClasses.forEach(match => {
        if (match.startsWith('#')) {
            // Setting ID
            element.id = match.substring(1);
        } else if (match.startsWith('.')) {
            // Adding classes
            const className = match.substring(1);
            element.classList.add(className);
        }
    });

    // Extracting attributes
    const attributes = selector.match(/\[.*?\]/g) || [];
    attributes.forEach(attribute => {
        const parts = attribute.match(/\[(.*?)=['"]?(.*?)['"]?\]/);
        if (parts && parts.length === 3) {
            const attrName = parts[1];
            const attrValue = parts[2];
            element.setAttribute(attrName, attrValue);
        }
    });

    return element;
}

function randomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export default {
    attachEl,
    createEl,
    randomInt
};