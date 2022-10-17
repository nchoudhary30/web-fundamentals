import React, { PureComponent } from "react";
import { Button, Form, Input } from "antd";

class EditUser extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      updated: "",
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    };
  }

  setId = (e) => {
    this.setState({ id: e.target.value });
  };

  setFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  setLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  setRole = (e) => {
    this.setState({ role: e.target.value });
  };

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };


  render() {
    let updateuserdetails = (
      <div>
        <Form>
          <label>
            ID :
            <Input
              defaultValue={this.props.user.userId}
              placeholder="Enter ID"
              name="name"
              onChange={this.setId}
            />
          </label>
          <label>
            First Name :
            <Input
              placeholder="Enter First Name"
              defaultValue={this.props.user.userFirstName}
              name="name"
              onChange={this.setFirstName}
            />
          </label>
          <label>
            Last Name :
            <Input
              placeholder="Enter Last Name"
              defaultValue={this.props.user.userLastName}
              name="name"
              onChange={this.setLastName}
            />
          </label>
          <label>
            Role :
            <Input
              name="name"
              defaultValue={this.props.user.userRole}
              placeholder="Enter Role"
              onChange={this.setRole}
            />
          </label>
          <label>
            Email :
            <Input
              name="name"
              defaultValue={this.props.user.userEmail}
              placeholder="Enter email"
              onChange={this.setEmail}
            />
          </label>
          <Button
            onClick={() => {
              let userdetails = {
                userId: this.state.id,
                userFirstName: this.state.firstName,
                userLastName: this.state.lastName,
                userRole: this.state.role,
                userEmail: this.state.email,
              };
                this.props.edituser(userdetails, this.props.id);

                this.setState({
                  id: userdetails.userId,
                  firstName: userdetails.userFirstName,
                  lastName: userdetails.userLastName,
                  role: userdetails.userRole,
                  email: userdetails.userEmail,
                });

                this.setState({ updated: "" });
              }
            }
          >
            Update
          </Button>

          <Button
            onClick={() => {
              this.setState({
                id: this.props.user.userId,
                firstName: this.props.user.userFirstName,
                lastName: this.props.user.userLastName,
                role: this.props.user.userRole,
                email: this.props.user.userEmail,
              });

              this.setState({ updated: "" });
            }}
          >
            Cancel
          </Button>
        </Form>
      </div>
    );

    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              id: this.props.user.userId,
              firstName: this.props.user.userFirstName,
              lastName: this.props.user.userLastName,
              role: this.props.user.userRole,
              email: this.props.user.userEmail,
            });
            this.setState({ updated: updateuserdetails });
          }}
        >
          Edit
        </Button>

        <div>{this.state.updated}</div>
      </div>
    );
  }
}

export default EditUser;
