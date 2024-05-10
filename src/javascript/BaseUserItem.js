export default class BaseUserItem {
    constructor(obj) { //remove = {}
        Object.assign(this, obj)
        this.created = new Date().toISOString()
        this.id = null
        this.updated = null
    }
}