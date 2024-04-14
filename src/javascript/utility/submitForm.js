function submitForm(form, formName, location, includedElements) {
        
        const include = includedElements.join(', ')

        let formFields = Array.from(form.querySelectorAll(include))
        let formValues = formFields.reduce((accumulator, field) => {
                // if (field.contains('form'))
                accumulator[field.id] = field.value;
                return accumulator;
        }, {});

        location[formName] = formValues

}

export default submitForm;