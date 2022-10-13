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
  result.users.forEach((ele) => {
    mainContainer.appendChild(userCard(ele));
  });
}

function userCard(user) {
  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardClass");
  let image = document.createElement("img");
  image.setAttribute("class", "imageClass");
  image.setAttribute("src", user.image);

  let details = document.createElement("div");
  details.setAttribute("class", "detailsClass");
  config.forEach((ele) => {
    let { label, key, formatter } = ele;
    if (formatter) {
      key = formatter(user);
    } else {
      key = user[key];
    }
    details.appendChild(createDetails(label, key));
  });
  cardContainer.appendChild(image);
  cardContainer.appendChild(details);
  return cardContainer;
}

function createDetails(label, key) {
  let data = document.createElement("div");
  data.setAttribute("class", "dataClass");
  let left = document.createElement("h4");
  left.setAttribute("class", "leftClass");
  left.textContent = label;
  let right = document.createElement("span");
  right.textContent = key;
  data.appendChild(left);
  data.appendChild(right);
  return data;
}
setUpListingPage();
