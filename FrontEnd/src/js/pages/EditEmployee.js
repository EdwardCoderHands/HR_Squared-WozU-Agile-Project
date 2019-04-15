// Imports the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

// Creates a class for displaying the modals for 'Add Employee' or 'Edit Employee'
export class EditEmployee extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      planId: 0
    };
    
    // Binds the functions
    this.handleEmployeeHasBeenEdited = this.handleEmployeeHasBeenEdited.bind(this);
    this.sendFetchOfEdits = this.sendFetchOfEdits.bind(this);
  }

  handleEmployeeHasBeenEdited(e) {// Changes the field data to reflect user input
    this.setState({[e.target.name]: e.target.value}); // Compiles a value from the input field
  }
  
  sendFetchOfEdits()  {// Fetch is POST '/api/employees' for adding Employees or PUT '/api/employees/{id}' for editing Employee data
    const url = 'http://localhost:5000/api/employees/' + (this.props.employee ? this.props.employee.employeeId : '');
   
    fetch(url, {
      method: (this.props.employee ? 'PUT' : 'POST'),
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(this.state)
      })
      location.reload();
  }
    
  // Renders the modals for 'Add Employee' or 'Edit Employee.'  The 'Name' field renders conditionally using
  // a ternary operator if 'Add Employee' is selected. 
  render() {
    const onShow = this.props.onShow;    
    const emp = (this.props.employee ? this.props.employee : {});
   
    return(

      <Modal id='defaultId' show={onShow} onHide={this.props.onCancel}>

        <Modal.Header closeButton>
          <Modal.Title>{(emp.name ? "Edit " + emp.name : "Add New Employee")}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

          {(!emp.name ? (
            <FormGroup controlId="formControlsName">
              <ControlLabel>Name:</ControlLabel>
              <FormControl name="name" type="text" onChange={this.handleEmployeeHasBeenEdited} />
            </FormGroup>
          ) : "")}
          
            <FormGroup controlId="formControlsName">
              <ControlLabel>Department:</ControlLabel>
              <FormControl name="department" type="text" onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.department} />
            </FormGroup>

            <FormGroup controlId="formControlsName">
              <ControlLabel>Supervisor</ControlLabel>
              <FormControl name="supervisor" type="text" onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.supervisor} />
            </FormGroup>

            <FormGroup controlId="formControlsName">
              <ControlLabel>Email</ControlLabel>
              <FormControl name="email" type="text" onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.email} />
            </FormGroup> 

            <FormGroup controlId="formControlsName">
              <ControlLabel>Phone Ext:</ControlLabel>
              <FormControl name="phone" type="text" onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.phone} />             
            </FormGroup> 

            <FormGroup controlId="formControlsName">
              <ControlLabel>Healthcare Plan:</ControlLabel>
                <FormControl componentClass="select" name="planId" onChange={this.handleEmployeeHasBeenEdited} > 
                  <option value="0">Please Select a Plan</option>
                  <option value="1">SuperMega Health</option>
                  <option value="2">Health-O-Rama</option>
                  <option value="3">Ultra Health Green</option>
                  <option value="4">Health One</option>
                </FormControl>
            </FormGroup> 

        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="success" onClick={this.sendFetchOfEdits}>Save</Button>
        </Modal.Footer>
           
      </Modal>

    );
  }
}
