import React, { PureComponent } from "react";

class User extends PureComponent {
  render() {
    return (
      <div>
          <div>
            ID: {this.props.user.userId}
          </div>
          <div>
            First Name: {this.props.user.userFirstName}
          </div>
          <div>
            Last Name: {this.props.user.userLastName}
          </div>
          <div>
            Role: {this.props.user.userRole}
          </div>
          <div>
            Email: {this.props.user.userEmail}
          </div>
      </div>
    );
  }
}

export default User;
