import Todo from '../../constructors/class_Todo'

function submitTodo(form, location) {

        let title = form.querySelector('#title').value
        let description = form.querySelector('#description').value
        let parentTag = form.querySelector('#parentTag').value
        let priority = form.querySelector(`input[name='priority']:checked`).value
        
        let todo = new Todo({title, description, parentTag, priority})
        location.push(todo)
}

export default submitTodo;