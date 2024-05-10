import BaseUserItem from "./BaseUserItem"

class Note extends BaseUserItem {
    constructor(obj) {
        super(obj)
    }
}

class Project extends BaseUserItem {
    constructor(obj) {
        super(obj)
    }
}

export {Note, Project}