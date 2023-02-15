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

// const fetchData = async () => {
//   try {
//     const token = { Authorization: "Bearer " + user.token };
//     const requestOptions = {
//       method: "POST",
//       headers: token,
//     };

//     const data = await fetch(
//       `http://localhost/users/audit`,
//       requestOptions
//     ).then((res) => res.json);
//     console.log(data);
//   } catch (error) {}
// };
export class DataPage extends Component {
  componentDidMount() {
    // fetchData();
  }
  render() {
    return <div>DataPage</div>;
  }
}

export default DataPage;
