class Project {
    #fav = false

    constructor (name) {
        this.name = name
    }

    toggleFav() {
        this.#fav = !this.#fav;
    }
    
}

export default Project;