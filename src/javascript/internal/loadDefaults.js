import Topic from '../constructors/Topic'
import ToDo from '../constructors/ToDo'
import addTo from '../utility/addTo'
import { topics } from './storage'

function loadDefaults() {
    let publishLocation = topics

    let defaultTopic = new Topic('default')

    publishLocation[defaultTopic.name] = defaultTopic

}

export default loadDefaults;