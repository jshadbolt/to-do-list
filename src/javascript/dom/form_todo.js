import storage from '../internal/storage'

import createSelect from "./createSelect";
import submitForm from '../utility/submitForm';
import createEl from '../utility/createEl';
import expandElement from '../utility/expandElement';
import createCheckList from './createCheckList';

function form(target) {

    let avaliableTopics = Object.keys(storage.topics)

    let form = createEl('form#createToDo')
    let nameLabel = createEl(`label[for='name']`)
    let nameField = createEl(`input#name[name='name']`)
    let descriptionLabel = createEl(`label[for='description']`)
    let descriptionField = createEl(`input#description[name='description']`)
    let checkListBtn = createEl(`button#checklistBtn[type='button']`)
    let checkListCont = createCheckList('#checklist-cont')

    let chosenTopicLabel = createEl(`label[for='topic']`)
    let chosenTopicField = createSelect(`#topics[name='topics']`, avaliableTopics)
    let submitBtn = createEl(`button#createToDo[type='button']`)


    nameLabel.textContent = nameField.name
    descriptionLabel.textContent = descriptionField.name
    checkListBtn.textContent = 'Checklist?'
    chosenTopicLabel.textContent = chosenTopicField.name
    submitBtn.textContent = 'Create toDo'


    checkListBtn.addEventListener('click', () => {
        expandElement(checkListCont)
    })

    submitBtn.addEventListener('click', () => {
        let _formName = nameField.value
        let _destination = storage.topics[chosenTopicField.value].items
        let _includedElements = ['input']

        submitForm(form, _formName, _destination, _includedElements)
        console.log(storage.topics)
    })


    form.append(nameLabel, nameField,
    descriptionLabel, descriptionField,
    checkListBtn,
    checkListCont,
    chosenTopicLabel, chosenTopicField,
    submitBtn)

    target.appendChild(form)   
}


export default form;

















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
//             type: 'checkbox',
//             listener: {
//                 type: 'change', // Change event is more suitable for checkboxes
//                 function: (e) => {
//                     checkListBtn(e.target, 'checklist_TODO')
//                 }
//             }
//         },
//         parentTopic: {
//             label: 'Choose topic',
//             element: () => {
//                 return createSelect(avaliableChoices, '.avaliable-topics#publish_location');
//             }
//         },
//         button: {
//             type: 'button',
//             value: 'Button',
//             listener: {
//                 type: 'click',
//                 function: (e) => {
//                     let include = [`input[type='text']`, `input[type='checkbox']`, 'select', 'form']
//                     let publishLocation = topics[e.target.closest('#publish_location')]
//                     submitForm(toDoForm, include, publishLocation)
//                     // console.log(topics)
//                 }
//             }
//         }
//     },
// };