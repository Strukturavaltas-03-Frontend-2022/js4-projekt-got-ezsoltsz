"use strict";
const table = document.querySelector(".container__characters");

fetch("./json/got.json")
  .then((response) => response.json())
  .then((charactersAllData) => {
    for (let i = 0; i < charactersAllData.length; i++) {
      charactersAllData.sort((a, b) => {
        let nameA = a.name;
        let nameB = b.name;
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
      const character = `     <div class="character">
       <img class=character__image src="${charactersAllData[i].portrait}" alt="${charactersAllData[i].name}" />
       <div class="character__name">${charactersAllData[i].name}</div>
       </div>`;
      if (!charactersAllData[i].dead) {
        table.innerHTML += character;
      }
    }
  });

  
  