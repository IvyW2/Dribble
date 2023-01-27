import React from 'react';

function ProjectItem () {
    return (
        <div className='project'>
        <Alert className='alert  m-3'>Projects</Alert>
            <Button variant="mb-3" className='add' >
            Add Project
          </Button>
           <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src="https://images.prismic.io/smarttask%2F3812b538-da10-4bfb-8406-baf1413c09ef_project+report.gif?auto=compress,format" />
          <Card.Body className='text-center'>
            <Card.Title className='title'>project name</Card.Title>
            <Card.Text>
            Description
            </Card.Text>
            <div className='d-flex'>
            <Button variant="mr-auto" className='edit' >Edit</Button>
            <Button variant="danger ms-auto">Delete</Button>
            </div>
          </Card.Body>
        </Card>


    </div>                
    )
}export default ProjectItem;