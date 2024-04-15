import element_todoform from "./elements/element_todoform"
import checkElExists from "../utility/checkElExistence"
import element_projectform from "./elements/element_projectform"

function loadUI() {

    const content = document.querySelector('#content')


    let btn_create_todo = document.querySelector('#create_todo')
    let btn_create_project = document.querySelector('#create_project')

    btn_create_todo.addEventListener('click', () => {
        let todoform = document.querySelector('#form_todo')
        if ( checkElExists(todoform) ) {
            todoform.remove()
        } else {
            content.appendChild(element_todoform())
        }
    })

    btn_create_project.addEventListener('click', () => {
        let projectform = document.querySelector('#form_project')
        if ( checkElExists(projectform) ) {
            projectform.remove()
        } else {
            content.appendChild(element_projectform())
        }
    })

    

}

export default loadUI;


