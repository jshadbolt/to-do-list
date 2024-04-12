import createEl from "./createEl";

function createForm(formOptions) {
    // Extract form name and fields from the formOptions object
    const formName = Object.keys(formOptions)[0];
    const fields = formOptions[formName];

    // Create form element
    const form = createEl(`form[name='${formName}']`);

    // Loop through each property in the fields object
    for (const key in fields) {
        if (fields.hasOwnProperty(key)) {
            const option = fields[key];

            // Check if the field is 'element'
            if (option.element !== undefined && option.element !== null) {
                // Append custom element if specified
                if (typeof option.element === 'function') {
                    const customElement = option.element();
                    form.appendChild(customElement);
                } else {
                    console.error(`Invalid 'element' property for field '${key}'. It must be a function.`);
                }
            } else {
                // Create label element
                const label = createEl(`label[for='${key}Input']`);
                label.textContent = option.label || key 
                form.appendChild(label);

                // Create input element based on the specified type
                const inputType = option.type || 'text';
                const input = createEl(`input#${key}Input[type='${inputType}']`);
                input.placeholder = option.placeholder || '' 
                input.value = option.value || ''
                form.appendChild(input);
            }

            form.appendChild(createEl('br'));
        }
    }

    return form;
}


// could edit createform to allow the addittion of any number of attributes such as min: 10, length: 100 and just apply anything that isnt 'type' or 'label'

export default createForm;



// const formStructure = {
//     toDoForm: {
//         name: {
//             label: 'Name',
//             placeholder: 'Enter title',
//             type: 'text'
//         },
//         description: {
//             label: 'Description',
//             placeholder: 'Enter description',
//             type: 'text'
//         },
//         checkbox: {
//             label: 'Checkbox',
//             type: 'checkbox'
//         },
//         parentTopic: {
//             label: 'Parent topic',
//             element: functionThatReturnsAnElement(),
//         }
//     }
// }

// can attach event listeners after creation 