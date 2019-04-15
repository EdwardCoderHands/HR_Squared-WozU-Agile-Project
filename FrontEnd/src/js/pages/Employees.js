// Imports the necessary files
import React from 'react';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {EditEmployee} from './EditEmployee';

// Creates a class for displaying Employees in a master list and detail list
export default class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      showEdit: false,
    };
    
    // Binds the functions
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  
  componentDidMount() {// The componentDidMount() method runs after the component output has been rendered to the DOM
    this.getItems();
  }
  
  getItems() {// Fetches the master list of all Employee data from the back end using the JSON format    
    fetch('http://localhost:5000/api/employees')
    .then(results => results.json())
    .then(results => {
      this.setState({employees : results});
    })
  }                  

  showAddModal() {// Shows the 'Add Employee' detail modal
    this.setState({currentlyEditing : -1, showEdit: !this.state.showEdit});
  }

  showEditModal(index) {// Shows the 'Edit Employee' detail modal
    this.setState({currentlyEditing: index, addOrEditLabel: 'Edit', showEdit: !this.state.showEdit});
  }

  cancelModal() {// Collapses the 'Add Employee' or 'Edit Employee' modal when the 'X' is clicked
    this.setState({showEdit: false});
  }

  deleteEmployee(index) {// Deletes an existing Employee from the back end Db
    const employees = this.state.employees;
    const url = 'http://localhost:5000/api/employees/' + (employees[index].employeeId);

    fetch(url, {
      method: 'DELETE'
    })
    location.reload();
  }

  render() {// Renders the Employee master list.  If 'Add Employee' or 'Edit Employee' are selected, also renders the Employee detail list
    const employees = this.state.employees;

    return(

      <div className="jumbotron">

        <h2>Employees</h2>
        
        <PanelGroup accordion id="employees">
            
            {employees.map((item, index) => (
            <Panel eventKey={index}>
            
              <Panel.Heading>
                <Panel.Title className="title" toggle>{item.name}</Panel.Title>
              </Panel.Heading>
              
              <Panel.Body collapsible>
                <ListGroup>
                  <ListGroupItem key={(index + 1)}>Employee Name: {item.name}</ListGroupItem>
                  <ListGroupItem key={(index + 2)}>Department: {item.department}</ListGroupItem>
                  <ListGroupItem key={(index + 3)}>Supervisor: {item.supervisor}</ListGroupItem>
                  <ListGroupItem key={(index + 4)}>Email: {item.email}</ListGroupItem>
                  <ListGroupItem key={(index + 5)}>Phone Ext: x{item.phone}</ListGroupItem>
                  <ListGroupItem key={(index + 6)}>Plan Name: {item.plan.planName}</ListGroupItem>
                </ListGroup>

                <ButtonToolbar>
                  <Button bsStyle="warning" onClick={() => {this.showEditModal(index)}}>Edit</Button>
                  <Button bsStyle="danger" onClick={() => {this.deleteEmployee(index)}}>Delete</Button>
                </ButtonToolbar>
              </Panel.Body>
              
            </Panel>
          ))}

            <EditEmployee onShow={this.state.showEdit} onCancel={this.cancelModal} employee={(this.state.currentlyEditing > -1 ? this.state.employees[this.state.currentlyEditing] : null)} />
          
        </PanelGroup>
        
        <Button bsStyle="primary" onClick={this.showAddModal}>Add Employee</Button>
        
      </div>

    );    
  }
}





