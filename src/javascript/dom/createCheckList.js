import createEl from "../utility/createEl"
import isEnterKey from "../utility/callbackFns/isEnterKey"
import {leadItemBtn} from "./btnHandlers/leadItemBtn"
import attachEl from "../utility/attachEl"


function createCheckList() {

    let container = createEl('.checklist-container')
    let list = createEl('ul.checklist')
    let leadItem = createLeadItem(list)

    container.appendChild(list)
    list.appendChild(leadItem)

    return container
}

function createLeadItem(parent) {
    let container = createEl('li.checklist-item#lead-item')

    let bullet = createEl('input.checklist-bullet[type="checkbox"]')
    let input = createEl('input.checklist-field[type="text"]')

    input.addEventListener('keyup', function(event) {
        if (isEnterKey(event)) {
            let fields = { bullet , input }
            attachEl(leadItemBtn(parent, fields) , container,  'before')
        }
    });

    container.append(bullet, input)
    return container
}

export default createCheckList;