'use strict';

    const firstItem = document.querySelector("#firstItem");
    const secondItem = document.querySelector('#secondItem');
    const speciesDropDown = document.querySelector("#speciesDropDown");
    const planetDropDown = document.querySelector("#planetDropDown");
    

document.addEventListener('DOMContentLoaded', function() {
    console.log('load?');
    console.log("starwarsSpecies", firstItem)
    

fetch("https://swapi.dev/api/species/?category=all")
.then(function(response) {
    return response.json();
})
.then(function(data) {
  populateDropDown(speciesDropDown, data.results);
  console.log(speciesDropDown, data.results);
   showSpecies(data.results[0].name, firstItem);
   }

)});  


fetch("https://swapi.dev/api/planets/?category=all")
.then(function(response) {
    return response.json();
})
.then(function(data){
    populateDropDown(planetDropDown, data.results);
    showSpecies(data.results[0].name, secondItem);
});

function populateDropDown(dropdown, items) {
    items.forEach(function (item, index) {
        const option = document.createElement('option');
        option.value = items.name;
        option.text = items.name;
        dropdown.appendChild(option);
    });
    
    dropdown.addEventListener('change', function() {
        const selectedOption = dropdown.options[dropdown.selectedIndex].value;
        if (dropdown === speciesDropDown) {
            showSpecies(selectedOption, firstItem);
        } else if (dropdown === planetDropDown) {
            showSpecies(selectedOption, secondItem)
        }
    })
        
    };



   function showSpecies(a , b) {
       b.innerHTML = a;
   }



