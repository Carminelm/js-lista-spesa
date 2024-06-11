//Creiamo lista della spesa 

const userArray = ["Latte", 
    "Pane", 
    "Pasta",
    "Frutta",
    "Sale"];


//Stampiamo su html 

const container = document.getElementById("lista")

//identifichiamo l'indice

const index = 0;

//Creiamo ciclo while 

while (index < userArray.length) {
    const elementLi = document.createElement("li");
    elementLi.innerText = userArray;
    container.append(elementLi);
    index++;
  }
   