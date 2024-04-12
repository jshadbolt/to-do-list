import { topics } from '../internal/storage'
import createSelect from "./createSelect";
import createForm from '../utility/createForm';

function toDoForm(target) {

    let avaliableChoices = Object.keys(topics)

    const formStructure = {
        toDoForm: {
            name: {
                label: 'Name',
                placeholder: 'Enter title',
                type: 'text'
            },
            description: {
                label: 'Description',
                placeholder: 'Enter description',
                type: 'text'
            },
            checkbox: {
                label: 'Checkbox',
                type: 'checkbox'
            },
            parentTopic: {
                label: 'Parent topic',
                element: () => {
                    return createSelect(avaliableChoices, 'avaliable-topics')
                },
            },
        }
    }

    let toDoForm = createForm(formStructure)
    target.appendChild(toDoForm)





    // let availableTopics = Object.keys(topics);

    // const container = createEl('.create-form.todo');

    // const toDoForm = createEl('form');
    // toDoForm.addEventListener('submit', (e) => e.preventDefault())

    // const nameLabel = createEl('label[for="name"]');
    // nameLabel.textContent = 'name';
    // const nameField = createEl('input#name[type="text"]');
    // const descriptionLabel = createEl('label[for="description"]');
    // descriptionLabel.textContent = 'Description';
    // const descriptionField = createEl('input#description[type="text"]');

    // const checklistLabel = createEl('label[for="checklist"]');
    // checklistLabel.textContent = 'Checklist';
    // const checklistField = createEl('input#checklist[type="checkbox"]');

    // const parentTopicLabel = createEl('label[for="parentTopic"]');
    // parentTopicLabel.textContent = 'Choose Topic';
    // const parentTopicSelect = createSelect(availableTopics, 'avaliable-topics');

    // const createBtn = createEl('button.create-button')
    // createBtn.textContent = 'Create Todo'

    // createBtn.addEventListener('click', () => {
    //     let fields = {
    //         name : nameField.value,
    //         description : descriptionField.value,
    //         parentTopic : parentTopicSelect.value,
    //     };
    //     submitToDoBtn(fields)
    // })

    // checklistField.addEventListener('click', () => {
    //     let newCheckList = createCheckList()
    //     attachEl(newCheckList, parentTopicLabel, 'before')
    // })

    // toDoForm.append(
    //     nameLabel, nameField,
    //     descriptionLabel, descriptionField,
    //     checklistLabel, checklistField, 
    //     parentTopicLabel, parentTopicSelect,
    //     createBtn
    // );

    // container.appendChild(toDoForm);
    // target.appendChild(container)

}

export default toDoForm;
