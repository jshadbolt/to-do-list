import submitForm from '../../utility/submitForm'

function submitToDoBtn(fieldObj) {

        let publishLocation = fieldObj[fields.parentTopic].items

        // let newToDo = new ToDo({...fields})
        let newToDo = new ToDo()
        newToDo.name = fieldObj.name
        newToDo.description = fieldObj.description
        newToDo.parentTopic = fieldObj.parentTopic
        
        submitForm(newToDo, newToDo.name, publishLocation)

        console.log(topics)
}

export default submitToDoBtn;