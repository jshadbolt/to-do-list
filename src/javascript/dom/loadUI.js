import form_todo from "./form_todo"

function loadUI() {
    const content = document.querySelector('#content')

    let toDoBtn = document.querySelector('.to-do-button')


    toDoBtn.addEventListener('click', () => {
        form_todo(content)
    })
}

export default loadUI;


