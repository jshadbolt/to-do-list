// function createEl(shorthand) {

//     const classes = [];
//     const ids = [];
//     let tagName = 'div'; // Default to div if no tag name provided
    
//     // Split shorthand notation by '#' for IDs and '.' for classes
//     const parts = shorthand.split(/[#.]/);

//     // Get the tag name
//     if (parts[0] !== '') {
//         tagName = parts[0];
//     }

//     // Extract IDs and classes
//     parts.slice(1).forEach(part => {
//         if (part.startsWith('#')) {
//             ids.push(part.slice(1));
//         } else if (part.startsWith('.')) {
//             classes.push(part.slice(1));
//         }
//     });

//     // Create the element
//     const el = document.createElement(tagName); // Create element using specified tag name
//     if (classes.length > 0) {
//         el.classList.add(...classes);
//     }
//     if (ids.length > 0) {
//         el.setAttribute('id', ids[0]); // Only set the first ID if multiple IDs are provided
//     }

//     return el

// }

function createEl(shorthand) {
    const classes = [];
    const ids = [];
    let tagName = 'div'; // Default to div if no tag name provided
    let attributes = {};

    // Split shorthand notation by '#' for IDs and '.' for classes
    const parts = shorthand.split(/[#\[]/);

    // Get the tag name
    tagName = parts[0];

    // Extract IDs, classes, and attributes
    parts.slice(1).forEach(part => {
        if (part.startsWith('.')) {
            classes.push(part.slice(1));
        } else if (part.startsWith('#')) {
            ids.push(part.slice(1));
        } else if (part.includes('=')) {
            const [attrName, attrValue] = part.split('=');
            attributes[attrName] = attrValue.replace(/["\]]/g, '');
        }
    });

    // Create the element
    const el = document.createElement(tagName); // Create element using specified tag name
    if (classes.length > 0) {
        el.classList.add(...classes);
    }
    if (ids.length > 0) {
        el.setAttribute('id', ids[0]); // Only set the first ID if multiple IDs are provided
    }
    for (const [attrName, attrValue] of Object.entries(attributes)) {
        el.setAttribute(attrName, attrValue);
    }

    return el;
}



export default createEl;