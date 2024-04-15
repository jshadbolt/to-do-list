import Project from '../../constructors/class_Project'

function submitProject(form, location) {
        let name = form.querySelector('#title').value
        let project = new Project(name)
        location.push(project)
}

export default submitProject;