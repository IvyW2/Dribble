import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { axiosApi } from '../api/base';
import { PROJECTS } from '../api/endpoints';

function Project({toggleModal, activeProject , isEdit, listProjects}) {
  
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

  const editProject = () => {
    const payload = {
       name,
       description
    }

    axiosApi.put(PROJECTS.edit(activeProject?.id), payload).then(resp=>{
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
    

}export default Project;