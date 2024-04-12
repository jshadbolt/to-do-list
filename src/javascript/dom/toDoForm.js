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
                label: 'Choose topic',
                element: () => {
                    return createSelect(avaliableChoices, 'avaliable-topics');
                }
            },
            button: {
                type: 'button',
                value: 'Button',
                listener: {
                    type: 'click',
                    handler: () => {
                        console.log('Button clicked');
                    }
                }
            }
        }
    };

    let toDoForm = createForm(formStructure)
    target.appendChild(toDoForm)




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
