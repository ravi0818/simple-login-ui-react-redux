// const DataPage = () => {
//   const fetchData = async (token) => {
//     try {
//       const requestOptions = {
//         method: "POST",
//         headers: token,
//       };

//       const data = await fetch(
//         `http://localhost/users/audit`,
//         requestOptions
//       ).then((res) => res.json);
//       console.log(data);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     let user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.token) {
//       const token = { Authorization: "Bearer " + user.token };
//       fetchData(token);
//     } else {
//       return {};
//     }

//     return () => {};
//   }, []);

//   return <div>DataPage</div>;
// };

// export default DataPage;

import React, { Component } from "react";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class DataPage extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.state = { data: [] };
    console.log(this.props);
  }
  componentDidMount() {
    const { user, users } = this.props;
    const token = { Authorization: "Bearer " + user.token };
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2VjZDY3Yzk0NWRmNTIwYTgyZGZiYTgiLCJpYXQiOjE2NzY0Njk0NDN9.57-H5_3_i36I0ixuhi0ecN8k7DfpCGh1Isv0oqmTnx8"
    );
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };
    fetch("http://localhost:4000/users/audit", requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }))
      .catch((error) => console.log("error", error));
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Audit data</h3>
        <table style={{ width: "100%" }}>
          {console.log("state", this.state)}
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ padding: "1.5rem" }}>Username</th>
              <th style={{ padding: "1.5rem" }}>Last Login</th>
              <th style={{ padding: "1.5rem" }}>Last Logout</th>
            </tr>
          </thead>
          <tbody>
            {this.state &&
              this.state.data.map((item) => (
                <tr key={item._id} style={{ border: "1px solid black" }}>
                  <td style={{ padding: "1.5rem" }}>{item.username}</td>
                  <td style={{ padding: "1.5rem" }}>{item.lastLogin}</td>
                  <td style={{ padding: "1.5rem" }}>{item.lastLogout}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  getAudit: userActions.getAudit,
  deleteUser: userActions.delete,
};

const connectedDataPage = connect(mapState, actionCreators)(DataPage);
export { connectedDataPage as DataPage };
