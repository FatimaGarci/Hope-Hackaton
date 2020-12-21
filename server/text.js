$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);



// const search = document.getElementById('search');
// const matchList = document.getElementById('match-list');

// // Search the animals json and filter it
// const searchAnimal = async searchText =>{
//     const res = await fetch(' http://localhost:3000/extinct'); //call the json file
//     // const res = await fetch('./extinct.json'); //call the json file
//     const animals = await res.json(); //give us the items inside of the json

//     // console.log(animals);

//     // Get matches to current text input 
//     let matches = animals.filter(animal => {
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         return animal.name.match(regex); 
//     });
//         // console.log(matches);

//     if(searchText.length === 0){
//         matches = []; //clear the arrays when dlete in the search bar
//         matchList.innerHTML = '';
//     }

//     outputHtml(matches);
// };

// // show results in HTML
// const outputHtml = matches =>{
//     if (matches.length > 0){ //map returns an array from an array
//         const html = matches.map(match => `
//         <div class="card card-body  mb-1">
//             <h3>${match.name}</h3>
//             <span>${match.year}</span>
//             <p>${match.category}</p>
//         </div>
//         `).join('');
//         // console.log(html);

//         matchList.innerHTML = html;
//     }
// }

// search.addEventListener('input', () => searchAnimal(search.value));