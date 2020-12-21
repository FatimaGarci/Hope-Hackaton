// Run function checkItem on click of 'submit' button
document.getElementById('submit').addEventListener('click', checkItem);

// RegExp for userInput Variable
function stringCheck(str){
  var remove = /[\W_]/g;
  var lowerStr = str.toLowerCase().replace(remove, '');
  return lowerStr;
}

// Function to create HTML element
const createNode = (element) => {
  return document.createElement(element);
};

// Function to insert HTML elements appropriately
const append = (parent, child) => {
  return parent.appendChild(child);
};

/* Function that converts user input, uses that input to fetch the appropriate
API, and assign the returned objects data to the correct HTML elements */
function checkItem(event){
  reset();
  const userInput = document.getElementById('searchbar').value;
  // let endPoint = stringCheck(userInput);
  event.preventDefault();
  fetch(` http://localhost:3000/extinct`)
  .then((res) => res.json())
  .then((data) => {
    const array = [data];
    return array.map((extinct) =>{
      let itemBox = createNode('div');
      let name = createNode('h3');
      let category = createNode('p');
  
      name.innerText = `${extinct.name}`;
      category.innerText = `${extinct.category}`;
  
      append(resultBox, itemBox);
      append(itemBox, name);
      append(itemBox, category);
    
    });
         
  })
  .catch((err) => {
    alert('No matching results! Please try again.');
    console.log(err);
  });
}

// Function to reset the innerHTML set up by the previous function
function reset(){
  document.getElementById('resultBox').innerHTML = '';
}
