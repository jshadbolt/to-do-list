export default class View {
    constructor(root, handlers = {}) {
        this.root = root
        this.container = root.querySelector('#view')

        let openCreateWindowBtn = this.root.querySelector('#show-create-popup')
        let createWindow = this.root.querySelector('#create-window')

        openCreateWindowBtn.addEventListener('click', () => openDialog(createWindow))
        this.root.addEventListener('click', (e) => closeDialog(createWindow))

        function closeDialog(dialog) {
            if (!event.target.contains(dialog)) {
                return
            };
            dialog.close();
        }

        function openDialog(dialog) {
            dialog.showModal()
        }

        

    }

    createTodoHTML(obj) {
        return ` 
        <div class="todo-item-cont">
            <div class="todo-item-title">${obj.title}</div>
            <div class="todo-item-description">${obj.description}</div>
        </div>
        `
    }

    refreshList(items) {
        let container = this.container
        container.innerHTML = ""

        for (let item in items) {
            let html = this.createTodoHTML(item)
            this.container.appendChild(html)
        }
    }
}


function btnDictionary(root) {



}