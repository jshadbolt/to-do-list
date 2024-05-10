import { Note, Project } from "./UserItems"

export default class AppModel {
    constructor() {
        this.notes = new WriteAPI('app-notes', Note)
        this.projects = new WriteAPI('app-projects', Project)
    }

    bindOnNotesChange(callback) {
        this.onChange = callback
    }

    getNotes() {
        return this.notes.getAll()
    }

    createNote(obj) {
        this.notes.save(obj)
        this.onChange(this.getNotes())
    }

    deleteNote(id) {
        this.notes.delete(id)
        this.onChange(this.getNotes())
    }

}

class WriteAPI {
    constructor(storageKey, classType) {
        this.storageKey = storageKey
        this.classType = classType
    }

    getAll() {
        let all = JSON.parse(localStorage.getItem(this.storageKey)) || []
        return all
    }

    save(toSave) {
        let all = this.getAll()
        console.log("All items before save:", all);
        let existing = all.find(item => item.id === toSave.id) //conflict with not providing id on creation? 
        if (existing) {
            Object.assign(existing, toSave)
            existing.updated = new Date().toISOString()
        } else {
            let newItem = new this.classType(toSave)
            console.log(all.length)
            newItem.id = all.length < 1 ? 0 : all.length
            all.push(newItem)
        }
        localStorage.setItem(this.storageKey, JSON.stringify(all))
        console.log("Updated items after save:", this.getAll());
    }
    
    delete(id) {
        console.log("Deleting item with id:", id);
        let all = this.getAll();
        console.log("All items before deletion:", all);
        let updated = all.filter(item => item.id !== parseInt(id));
        this.updateID(updated)
        localStorage.setItem(this.storageKey, JSON.stringify(updated));
        console.log("Updated items after deletion:", this.getAll());
    }

    updateID(arr) {
        for (let el of arr) {
            el.id = arr.indexOf(el)
        }
    }
}

