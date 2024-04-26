import { Todo, Topic } from "./ObjClass";
import WriteAPI from "./WriteAPI";
import View from "./View";

export default class App {
    constructor(root) {
        // this.root = root;

        this.todos = new WriteAPI('todos', Todo)
        this.topics = new WriteAPI('topics,', Topic)
        this.view = new View(root, this.handlers())
    }



    handlers() {

        return {    
            addTodo : todo =>  {
                this.todos.save(todo)
            },
    
            addTopic: topic =>  {
                this.topics.save(topic)
            },
        }

    }


}

