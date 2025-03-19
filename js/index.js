//Write your Javascript code here
console.log("Shoppinglist")

//Task 1. Create a function that return a new Li element
function createNewLiElement(className, idName, text) {
    let li = document.createElement("li"); //opretter et nyt li element
    li.setAttribute("id", idName); //sætter id på li elementet
    li.setAttribute("class", className); //sætter class på li elementet
    li.textContent = text; //sætter text på li elementet
    return li; //returnere li elementet
}


//Task 2. Create a function that append a Li element to a lis
function appendLiElement(listId, LiElement) {
    //jeg finder listen ved hjælp af id
    let list = document.getElementById(listId);

    //Jeg tilføjer det nye li til listen 
    list.append(LiElement)
}

//test Task 2.
let newLi = createNewLiElement("healthy", "5", "Bananas");  // Opretter et nyt <li> element
appendLiElement("list", newLi); 



