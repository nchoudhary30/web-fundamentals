import React, { PureComponent } from "react";
import { Form, Button, Input } from "antd";
import axios from "axios";

class AddUser extends PureComponent {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    };
  }

  componentDidMount=()=>{
    axios.get('/user')
        .then(response => {
          console.log(response.data)
          this.setState({id: response.data.id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          role: response.data.role,
          email: response.data.email})
        
          this.setState(response.data[0])
        })
    // fetch('',{
    //   headers:{'Content-Type': 'application/json'},
    //   mode: 'cors',
    //   method:'GET'
    // }).then(response => {
    //       //response.json()
    //       console.log(response.json);
    //     })
    //     .then(data => this.setState());

  }

  setId = (e) => {
    this.setState({ id: e.target.value });
  };

  setFirstName = (e) => {
    let val = e.target.value;
    this.setState({ firstName: val });
  };

  setLastName = (e) => {
    let val = e.target.value;
    this.setState({ lastName: val });
  };

  setRole = (e) => {
    let val = e.target.value;
    this.setState({ role: val });
  };

  setEmail = (e) => {
    let val = e.target.value;
    this.setState({ email: val });
  };

  handleSubmit = () => {
    let userdetails = {
      userId: this.state.id,
      userFirstName: this.state.firstName,
      userLastName: this.state.lastName,
      userRole: this.state.role,
      userEmail: this.state.email,
    };
    if (
      userdetails.userId === "" ||
      userdetails.userFirstName === "" ||
      userdetails.userLastName === "" ||
      userdetails.userRole === "" ||
      userdetails.userEmail === ""
    ) {
      alert("Please fill all the required details");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.state.id,
          firstname: this.state.firstName,
          lastname: this.state.lastName,
          role: this.state.role,
          email: this.state.email,
        }),
      };
      fetch("/user", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      this.props.Adduser(userdetails);
      this.setState({
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
      });
    }
  };

  render() {
    return (
      <div>
        <Form className="form">
          <Form.Item label="ID">
            <Input
              value={this.state.id}
              placeholder="Enter ID"
              onChange={this.setId}
            />
          </Form.Item>

          <Form.Item label="First Name">
            <Input
              placeholder="Enter First Name"
              value={this.state.firstName}
              onChange={this.setFirstName}
            />
          </Form.Item>

          <Form.Item label="Last Name">
            <Input
              placeholder="Enter Last Name"
              value={this.state.lastName}
              onChange={this.setLastName}
            />
          </Form.Item>

          <Form.Item label="Role">
            <Input
              value={this.state.role}
              placeholder="Enter Role"
              onChange={this.setRole}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              value={this.state.email}
              placeholder="Enter Email"
              onChange={this.setEmail}
            />
          </Form.Item>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddUser;
