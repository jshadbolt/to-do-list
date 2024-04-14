import Topic from '../constructors/Topic'
import ToDo from '../constructors/ToDo'
import storage from './storage'

function loadDefaults() {

    let defaultTopic = new Topic('default')
    storage.topics[defaultTopic.name] = defaultTopic
    
}

export default loadDefaults;