import createEl from "../../utility/createEl"
import storage from "../../internal/storage"

import submitProject from '../functions/submitProject'

function element_projectform() {
    
    let form = createEl('form#form_project')
    let titleLabel = createEl(`label[for='title']`)
    let titleField = createEl(`input#title[name='title'][required='true']`)
    let submitBtn = createEl(`button#submitBtn[type='submit']`)

    titleLabel.textContent = 'Project Name'
    submitBtn.textContent = 'Create Project'

    submitBtn.addEventListener('click', (e) => {
        if (form.checkValidity()) {
            e.preventDefault()
            submitProject(form, storage.projects)
            console.log(storage.projects)
        }
    })

    form.append(titleLabel, titleField, submitBtn)

    return form
}

export default element_projectform;