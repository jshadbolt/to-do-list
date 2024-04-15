import Project from '../constructors/class_Project'
import Todo from '../constructors/class_Todo'
import storage from './storage'

function loadInternal() {
    let gym = new Project('Gym')
    let work = new Project('Work')
    let personal = new Project('Personal')
    storage.projects.push(gym, work, personal)
}

export default loadInternal;