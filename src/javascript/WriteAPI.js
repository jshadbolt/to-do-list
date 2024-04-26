export default class WriteAPI {
    constructor(storageName, className) {
        this.storage = storageName
        this.class = className
    }

    getAll() {
        let all = JSON.parse(localStorage.getItem(this.storage)) || []
        return all
    }

    save(o) {
        const objs = this.getAll()
        const existing = objs.find(e => e.id === o.id)
        
        if (existing) {
            Object.assign(existing, o)
            existing.updated = new Date().toISOString()
        } else {
            o.id = objs.length + 1 //set id
            objs.push(new this.class(o))
        }
        localStorage.setItem(this.storage, JSON.stringify(objs))
    }

    delete(paramObj = {}) {
        if (paramObj.all) {
            localStorage.setItem(this.storage, JSON.stringify([]))
        } else {
            const objs = this.getAll() 
            let newObjs = objs.filter(e => e.id != paramObj.id).map((e, index) => {
                e.id = index
                return e
            })
            localStorage.setItem(this.storage, JSON.stringify(newObjs))
        }
    }
    
}
