import AppModel from "./AppModel";
import AppView from "./AppView";

export default class App {
    constructor(root) {
        this.model = new AppModel();
        this.view = new AppView(root);

        this.model.bindOnNotesChange((value) => this.view.updateNoteList(value))
        // this.model.bindOnProjectsChange((value) => this.view.updateProjectList(value))
        this.view.bindCreateNote((values) => this.model.createNote(values))
        this.view.bindDeleteNote((id) => this.model.deleteNote(id))
    }
}