import createEl from "../utility/createEl"
import toDoPopup from "./toDoPopup"

function loadUI() {
    const content = document.querySelector('#content')

    let toDoBtn = document.querySelector('.to-do-button')
    let topicBtn = document.querySelector('.topic-button')

    toDoBtn.addEventListener('click', () => {
        toDoPopup(content)
    })
}

export default loadUI;
