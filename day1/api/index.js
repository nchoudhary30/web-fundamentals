// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  // console.log(data);
  // let ele = document.getElementById("code");
//   let tempData = data.filter((a) => a.id < 50);
//   ele.innerHTML = JSON.stringify(tempData, null, 4);
let {limit, skip, total, users} = data;
console.log(users);

// let names=users.map((ele)=>`${ele.firstName} ${ele.lastName}`);
let names=users.map((ele)=>{return ({firstName: `${ele.firstName}`, lastName: `${ele.lastName}`, age:`${ele.age}`});})
                .filter((ele)=>ele.age < 50);

// console.log(names);

}

fetchDataFromServer();
