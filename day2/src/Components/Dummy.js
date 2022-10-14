
function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => printData(json));
  }
  
  function printData(data) {
  let {users} = data;
  // console.log(users);
  
  // let names=users.map((ele)=>`${ele.firstName} ${ele.lastName}`);
  let names=users.filter((ele)=>ele.age < 25)
        .map((ele)=>{return ({name:`${ele.firstName} `+`${ele.lastName}`});})
          ;
  
  console.log(names);
  
  }
  
 export default fetchDataFromServer;