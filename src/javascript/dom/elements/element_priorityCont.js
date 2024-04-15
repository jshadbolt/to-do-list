import createEl from "../../utility/createEl"

let priorityCont = function() {
    let priorityContainer = createEl(`div#priority-cont`)
    let priorityContainerLabel = createEl(`label[for='priority-cont']`)
    let priorityLowLabel = createEl(`label[for='priority-low']`)
    let priorityMediumLabel = createEl(`label[for='priority-medium']`)
    let priorityHighLabel = createEl(`label[for='priority-high']`)
    let priorityLow = createEl(`input#priority-low[name='priority'][value='low'][type='radio'][required='true']`)
    let priorityMedium = createEl(`input#priority-medium[name='priority'][value='medium'][type='radio']`)
    let priorityHigh = createEl(`input#priority-high[name='priority'][value='high'][type='radio']`)

    priorityContainerLabel.textContent = 'Priority'
    priorityLowLabel.textContent = 'Low'
    priorityMediumLabel.textContent = 'Medium'
    priorityHighLabel.textContent = 'High'
    priorityContainer.append(priorityContainerLabel, priorityLow, priorityLowLabel, priorityMedium, priorityMediumLabel, priorityHighLabel, priorityHigh)

    return priorityContainer
}

export default priorityCont