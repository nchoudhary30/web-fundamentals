// 1. Call  api.
// 2. Create Template for card.
// 3. render data

const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const userPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;

let config = [{key: "name", label: "Name ", formatter: nameFormatter},
  {key: "age", label: "Age"},
  {key: "phone", label: "Phone"},
  {key: "bloodGroup", label: "Blood-Group"},
  {key: "name", label: "Company", formatter: companyNameFormatter},
  {key: "name", label: "Position", formatter: userPositionFormatter},
  {key: "weight", label: "Weight"}];

function setUpListingPage() {
  fetchData();
}

async function fetchData() {
  let data = await fetch("https://dummyjson.com/users");
  let mainContainer = document.getElementsByClassName("main-conatiner")[0];
  let result = await data.json();
  console.log(result);
  result.users.forEach((ele) => {
    mainContainer.appendChild(userCard(ele));
  });
}


function createDetail(label,key){
  const detailTable=document.createElement("table");
  detailTable.setAttribute("class","table");
  const tblBody=document.createElement("tbody");
  const row=document.createElement("tr");
  const cell=document.createElement("td");
  const celltext=document.createTextNode(`${label} ${key}`);
  // celltext.setAttribute("class","row");
  cell.appendChild(celltext);
  row.appendChild(cell);
  tblBody.appendChild(row);
  detailTable.appendChild(tblBody);

  return detailTable;
}


function userCard(user){
const cardContainer=document.createElement("div");
cardContainer.setAttribute("class", "card");

const imageContainer=document.createElement("img");
imageContainer.setAttribute("class", "image");
imageContainer.setAttribute("src", user.image);

const detailContainer=document.createElement("div");
detailContainer.setAttribute("class", "detail");
config.forEach((ele) => {
  let {key, label, formatter}=ele;
  if(formatter){
    key=formatter(user);
  }
  else{
    key=user[key];
  }
  detailContainer.appendChild(createDetail(label, key));
});

cardContainer.appendChild(imageContainer);
cardContainer.appendChild(detailContainer);
return cardContainer;
}













// function userCard(user) {
//   let cardContainer = document.createElement("div");
//   cardContainer.setAttribute("class", "cardClass");
//   let image = document.createElement("img");
//   image.setAttribute("class", "imageClass");
//   image.setAttribute("src", user.image);

//   let details = document.createElement("div");
//   details.setAttribute("class", "detailsClass");
//   config.forEach((ele) => {
//     let { label, key, formatter } = ele;
//     if (formatter) {
//       key = formatter(user);
//     } else {
//       key = user[key];
//     }
//     details.appendChild(createDetails(label, key));
//   });
//   cardContainer.appendChild(image);
//   cardContainer.appendChild(details);
//   return cardContainer;
// }

// function createDetails(label, key) {
//   let data = document.createElement("div");
//   data.setAttribute("class", "dataClass");
//   let left = document.createElement("h4");
//   left.setAttribute("class", "leftClass");
//   left.textContent = label;
//   let right = document.createElement("span");
//   right.textContent = key;
//   data.appendChild(left);
//   data.appendChild(right);
//   return data;
// }
setUpListingPage();
