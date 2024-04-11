class ToDo {

    constructor (title, description, dueDate, priority, parentTopic) {
        this.creationDate = new Date().toString()
        this.title = title
        this.description = description
        this.checkList = []
        this.priority = priority
        this.dueDate = dueDate
        this.parentTopic = parentTopic
    }
}


export default ToDo;