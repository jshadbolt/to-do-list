import createEl from "../utility/createEl";
import attachEl from "../utility/attachEl";
import createSelect from "./createSelect";
import submitForm from "../utility/submitForm"
import { topics } from '../internal/storage'

import createCheckList from "./createCheckList";


import ToDo from "../constructors/ToDo";




function toDoForm(target) {

    // make a function to return these dom elements as one object so you can add event listeners whereeeded

    let availableTopics = Object.keys(topics);

    const container = createEl('.create-form.todo');

    const toDoForm = createEl('form');
    toDoForm.addEventListener('submit', (e) => e.preventDefault())

    const nameLabel = createEl('label[for="name"]');
    nameLabel.textContent = 'name';
    const nameField = createEl('input#name[type="text"]');
    const descriptionLabel = createEl('label[for="description"]');
    descriptionLabel.textContent = 'Description';
    const descriptionField = createEl('input#description[type="text"]');


    const checklistLabel = createEl('label[for="checklist"]');
    checklistLabel.textContent = 'Checklist';
    const checklistField = createEl('input#checklist[type="checkbox"]');
    checklistField.addEventListener('click', () => {

        let newCheckList = createCheckList()
        attachEl(newCheckList, parentTopicLabel, 'before')
    })



    const parentTopicLabel = createEl('label[for="parentTopic"]');
    parentTopicLabel.textContent = 'Choose Topic';
    const parentTopicSelect = createSelect(availableTopics, 'avaliable-topics');

    const createBtn = createEl('button.create-button')
    createBtn.textContent = 'Create Todo'
    createBtn.addEventListener('click', () => {

        // make a handleCreateBtn function

        let fields = {
            name : nameField.value,
            description : descriptionField.value,
            parentTopic : parentTopicSelect.value,
        };

        // publish to chosen topic
        let publishLocation = topics[fields.parentTopic].items

        
        // function that takes all fields (maybe all elements with class name VALUE) and assigns that to the new ToDo constructor 
        let newToDo = new ToDo({...fields})
        newToDo.name = fields.name
        newToDo.description = fields.description
        newToDo.parentTopic = fields.parentTopic
        
        submitForm(newToDo, newToDo.name, publishLocation)

        // console.log('All topics:', topics);
        console.log(topics)
    })

    // Append all elements to the form
    toDoForm.append(
        nameLabel, nameField,
        descriptionLabel, descriptionField,
        checklistLabel, checklistField, 
        parentTopicLabel, parentTopicSelect,
        createBtn
    );



    // Append the form to the container
    container.appendChild(toDoForm);

    // Add other elements as needed...

    // Return the container
    target.appendChild(container);

}

export default toDoForm;
