import storage from '../../internal/storage'
import createEl from '../../utility/createEl';

import element_select from "./element_select";
import element_priorityCont from './element_priorityCont'

import submitTodo from '../functions/submitTodo';

function element_todoform() {

    let avaliableProjects = storage.projects.map(project => project.name)
    
    let form = createEl('form#form_todo')
    let titleLabel = createEl(`label[for='title']`)
    let titleField = createEl(`input#title[name='title'][required='true']`)
    let descriptionLabel = createEl(`label[for='description']`)
    let descriptionField = createEl(`input#description[name='description'][required='true']`)
    let parentTagLabel = createEl(`label[for='parentTag']`)
    let parentTagField = element_select(`#parentTag[name='parentTag'][required='true']`, avaliableProjects)
    let priorityCont = element_priorityCont()
    let submitBtn = createEl(`button#submitBtn[type='submit']`)

    titleLabel.textContent = 'Title'
    descriptionLabel.textContent = 'Description'
    parentTagLabel.textContent = 'Choose Project'
    submitBtn.textContent = 'Create Todo'

    submitBtn.addEventListener('click', (e) => {
        if (form.checkValidity()) {
            e.preventDefault()
            submitTodo(form, storage.todos)
            console.log(storage.todos)
        }
    })

    form.append(titleLabel, titleField,
    descriptionLabel, descriptionField,
    parentTagLabel, parentTagField,
    priorityCont,
    submitBtn)

    return form
}



export default element_todoform;