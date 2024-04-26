class ObjClass {
    constructor(o) {
        Object.assign(this, o)
        this.creation = this.timeStamp()
    }

    timeStamp() {
        return new Date().toISOString()
    }
}

class Todo extends ObjClass {
    constructor(o) {
        super(o)
        this.type = 'todo'
    }
}

class Topic extends ObjClass {
    constructor(o) {
        super(o)
        this.fav = false
        this.type = 'topic'
    }

    toggleFav() {
        this.fav = !this.fav
    }
}


export {
    Todo,
    Topic
}