import React, { PureComponent } from "react";
import AddUser from "./Components/AddUser";
import DelUser from "./Components/DelUser";
import EditUser from "./Components/EditUser";
import User from "./Components/User";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: [],
    };
  }

  addUser = (user) => {
    let userList = this.state.users;
    userList.push(user);

    this.setState({ users: userList });
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  };

  deleteuser = (key) => {
    let userList = this.state.users;

    userList.splice(key, 1);
    this.setState({ users: userList });

    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  };

  edituser = (updatedUser, key) => {
    let userList = this.state.users;
    userList[key] = updatedUser;

    this.setState({ users: userList });

    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  };

  render() {
    return (
      <div>
        <div>
          <header className="header">
            <h2>User List</h2>
          </header>
        </div>
        <div>
          <AddUser Adduser={this.addUser}></AddUser>
          {this.state.users.map((USER, index) => {
            return (
              <div className="list">
                <User user={USER} />
                <DelUser id={index} deleteuser={this.deleteuser}></DelUser>
                <EditUser
                  id={index}
                  edituser={this.edituser}
                  user={USER}
                ></EditUser>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
