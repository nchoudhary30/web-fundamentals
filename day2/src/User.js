import React, { PureComponent } from "react";
import AddUser from "./Components/AddUser";
import "./App.css";

class User extends PureComponent {
  constructor() {
    super();
    this.state = {
      fetchedData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log("Fetch Data")
    fetch('http://localhost:8081/user',{ method: 'GET'})
      .then((res) => {
        console.log(res)
        return res.json()})
      .then((fetchedData) => {
        console.log(fetchedData);
        this.setState({ fetchedData });
      }).catch((ex)=>{
        console.log(ex,"************")
      });
  }

  render() {
    return (
      <div>
        <AddUser/>
      </div>
    );
  }
}

export default User;
