class Todo {

    constructor ({title, description, parentTag, priority}) {
        this.creationDate = this.timeStamp()
        this.title = title
        this.description = description
        // this.dueDate = dueDate
        this.parentTag = parentTag
        this.priority = priority
    }

    timeStamp() {
        return new Date()
    }
    
}


export default Todo;