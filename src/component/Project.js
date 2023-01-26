import React from "react";

function Projects () {

    const [ name, setName] = useState('');
  const [ description, setDescription] = useState('');

  useEffect(() => {
    console.log(isEdit, activeProject);
    isEdit ? setName(activeProject?.name) : setName('')
    isEdit ? setDescription(activeProject?.description) : setDescription('')
  }, [isEdit, activeProject])

  
  const addProject = () => {
    const payload = {
       name,
       description
    }

    axiosApi.post(PROJECTS.add, payload).then(resp=>{
        toggleModal();
        listProjects()
    })
  }



  return (
    <div>      
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={() => isEdit ? editProject() :  addProject()}>
           {isEdit ? 'Edit' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>  
    </div>
  )
    

}export default Projects;