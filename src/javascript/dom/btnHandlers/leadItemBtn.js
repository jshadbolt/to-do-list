import createEl from "../../utility/createEl"

function createItem(target, values) {
    let container = createEl('li.checklist-item')

    let bullet = createEl('input.checklist-bullet[type="checkbox"]')
    bullet.checked = values.bullet.checked
    let input = createEl('input.checklist-field[type="text"]')
    input.value = values.input.value


    container.append(bullet, input)
    return container
}

function leadItemBtn(parent, fields) {
    let newItem = createItem(parent, fields)
    fields.bullet.checked = false
    fields.input.value = ''
    return newItem
}

export { leadItemBtn } ;