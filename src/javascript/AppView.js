import { createEl } from "./util"

export default class AppView {
    constructor(root) {
        this.root = root
        this.form = createEl('form')
        this.title = createEl('input')
        this.body = createEl('input')
        this.submit = createEl('button')
        this.title.placeholder = 'New title'
        this.body.placeholder = 'New note'
        this.submit.textContent = 'Create note'
        this.form.append(this.title, this.body, this.submit)
        this.notesCont = createEl('div.notes-cont')
        this.notesList = createEl('ul.notes-list')
        this.notesCont.append(this.notesList)

        this.root.append(this.form, this.notesCont)
    }

    get _titleText() {
        return this.title.value
    }

    get _bodyText() {
        return this.body.value
    }

    _resetInputs() {
        let inputs = [this.title, this.body]
        for (let input of inputs) {
            input.value = ''
        }
    }

    updateNoteList(notes) {
        let list = this.notesList

        while (list.firstChild) {
            list.removeChild(list.firstChild)
        }
        for (let note of notes) {
            let listItem = createEl('li')
            let title = createEl('div')
            let body = createEl('div')
            let deleteBtn = createEl('button.delete-note')
            listItem.id = note.id
            title.textContent = note.title
            body.textContent = note.body
            deleteBtn.textContent = 'delete note'
            listItem.append(title, body, deleteBtn)
            
            list.appendChild(listItem)
        }
    }

    bindCreateNote(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            if (this._titleText) {
                let note = {
                    title : this._titleText,
                    body : this._bodyText,
                }
                handler(note)
                this._resetInputs()
            }
        })
    }

    bindDeleteNote(handler) {
        this.notesList.addEventListener('click', event => {
            if (event.target.className === 'delete-note') {
                let id = event.target.parentElement.id
                handler(id)
            }
        })
    }
}