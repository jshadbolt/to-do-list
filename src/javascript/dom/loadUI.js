import toDoForm from './toDoForm'

function loadUI() {
    const content = document.querySelector('#content')

    let toDoBtn = document.querySelector('.to-do-button')
    let topicBtn = document.querySelector('.topic-button')

    toDoBtn.addEventListener('click', () => {
        toDoForm(content)
    })
}

export default loadUI;
