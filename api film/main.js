let search = document.querySelector('#keyword');
const button = document.querySelector('#bouton');
const liste = document.querySelector('#list');
button.addEventListener('click', (event)=>{
   event.preventDefault();
   let recherche = search.value;
   liste.innerHTML = "";
   let url = 'http://www.omdbapi.com/?s='+recherche+'&apikey=9c5cea33';
fetch(url)
.then(response => response.json())
.then( (data) => {
      data.Search.forEach( (element)=> {
            liste.insertAdjacentHTML('beforeend', `
               <li>
                  <img src="${element.Poster}">
                  <p>${element.Title}</p>
               </li>`)
            });
      });
   search.value = "";
});