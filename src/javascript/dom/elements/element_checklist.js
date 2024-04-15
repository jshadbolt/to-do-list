import createEl from "../../utility/createEl"


function element_checklist(checklistID) {

    let container = createEl(`div${checklistID}`)
    let list = createEl('ul.checklist')
    let listItemLead = new ListItem_Lead(list).createSelf()

    container.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    container.appendChild(list)
    list.appendChild(listItemLead)
    return container
}


class ListItem {
    constructor() {

    }
    create() {
        let container = createEl('li.item-cont')
        let bullet = createEl('input.item-bullet[type="checkbox"]')
        let input = createEl('input.item-field[type="text"]')
        container.append(bullet, input)

        return container
    }
}


class ListItem_Lead extends ListItem {
    
    constructor(parent) {
        super(); // Call the constructor of the parent class
        this._parent = parent;
    }

    createSelf() {
        let self = super.create();
        let bullet = self.querySelector('input[type="checkbox"]');
        let input = self.querySelector('input[type="text"]');
        self.dataset.checklist_number = 0

        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                let bulletValue = bullet.checked;
                let inputValue = input.value;
                let newItem = this.createNew(bulletValue, inputValue);
                newItem.dataset.checklist_number = self.dataset.checklist_number++
                this._parent.insertBefore(newItem, e.target.parentNode);

                // reset checkbox and input of lead
                bullet.checked = false
                input.value = ''
            }
        });


        return self

    }

    createNew(bulletValue, inputValue) {
        let newItem = super.create();
        let bullet = newItem.querySelector('input[type="checkbox"]');
        let input = newItem.querySelector('input[type="text"]');
        newItem.dataset.checklist_number = '0'


        bullet.checked = bulletValue; // Set checkbox state
        input.value = inputValue; // Set input value

        return newItem;
    }
}


export default element_checklist;