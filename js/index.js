//dette indeholder DOM metoder som manipulere med html for shoppnglist 
//Write your Javascript code here
console.log("Shoppinglist")

//Task 1. Create a function that return a new Li element
function createNewLiElement(className, idName, text) {
    let li = document.createElement("li"); //opretter et nyt li element
    li.setAttribute("id", idName); //sætter id på li elementet
    li.setAttribute("class", className); //sætter class på li elementet

    let tekstnode = document.createTextNode(text) //opretter en textnode
    li.append(tekstnode); //tilføjer tekstnode til li-element
    return li; //returnere li elementet
}

//her tester jeg opgave 1 for at se om det bliver tilføjet til siden. 
const body = document.body
let test = createNewLiElement("test", "test", "test");  // Opretter et nyt <li> element
//body.append(test) 


//Task 2. Create a function that append a Li element to a lis
function appendLiElement(listId, LiElement) {
    //jeg finder listen ved hjælp af id
    let list = document.getElementById(listId);
    if (list){
        //Jeg tilføjer det nye li til listen 
        list.append(LiElement)
    } else{
        console.error("Listen Findes ikke")
    }
    
}


//test Task 2. til healthy listen 
let newLi = createNewLiElement("healthy", "5", "Bananas");  // Opretter et nyt <li> element
appendLiElement("list", newLi); 

//test Task 2. til unhealthy listen 
let newLiu = createNewLiElement("unhealthy", "6", "orange");  // Opretter et nyt <li> element
appendLiElement("listUnhealthy", newLiu); 

//Task 3. Create a function that change or add the class attribute
function ChangeOrAddClass(element, classValue){
    //hvils elementet eksistere set classvalue til class
    if (element.hasAttribute('class')){
        (element.setAttribute('class', classValue));
    } else{
        element.setAttribute('class', classValue); //ellers opret classvalue
    }
}

//test opgave 3. vælger et element og updatere dens class
// Vælg et element
let BananaElement = document.getElementById(5);

// Test funktionen ved at ændre eller tilføje en class
ChangeOrAddClass(BananaElement, "unhealthy");


//Task 4. Create a function that delete a li element
function DeleteElement(element){
    if (element){
        element.remove()
    }else {
        console.error("elementet eksistere ikke") 
    }
}

//tester opgave 4, ved at slette bananas med id 5 
DeleteElement(document.getElementById(5))


//task 5. Create a function that change the text in a Li element
function ChangeText(element, newtext){
    if (element){
        element.textContent = newtext; //ændre teksten i elementet - When you set the textContent property, all child nodes are removed and replaced by only one new text node.
    }else {
        console.error("Elementet findes ikke");
    }
}

//tester opgave 5. - skifter orange ud med mango
ChangeText(document.getElementById(6), "mango")


//opgave 6 - Create a function that count all the li element at a specific list
function CountElements(listId){
    let numb = document.getElementById(listId).childElementCount; //vi henter listen og benytter ChildElementCount. man kan også benytte children.length; - The childElementCount property returns the number of child elements of an element.
    console.log(numb)

}

//man kan nu se antallet af elementer i ul listen. i consollen
CountElements("listUnhealthy")
CountElements("list")


//opgave 7. Move a node
function MoveAlleUnhealthy() {
    const nodes = document.querySelectorAll("#list .unhealthy"); // Finder alle "unhealthy" elementer i listen list
    const unhealthylist = document.getElementById("listUnhealthy"); // Finder mållisten

    //laver en foreach for at gå igennem hele listen. (html DOM - NodeList - foreach)
    nodes.forEach(function(node) {
        return unhealthylist.appendChild(node); // Flytter hvert element til den nye liste
    });
}

//tester opgave 7 
MoveAlleUnhealthy()

//opgave 2 Add an EventListener so when you press the button then a new item is added to the shopping list with the text that is in the input field.

//jeg laver her en eventlistener som virker når user klikker på knappen "addbutton"


//opgave 3 //funktion + eventlistener som tilføjer
function addItemToList() {
    let text = document.getElementById("AddElement").value;  // Hent inputværdien
    let id = document.getElementById("Id").value;  // Hent ID
    let classHU = document.getElementById("classHU").value;  // Hent class ("healthy" eller "unhealthy")

    if (text !== "" && id !== "" && classHU !== "") {  // Sikrer at alle felter er udfyldt
        let newLi = createNewLiElement(classHU, id, text);  // Opret <li>-element
        let listId = classHU === "unhealthy" ? "listUnhealthy" : "list"; // Bestem listen

        appendLiElement(listId, newLi); // Tilføj til den rigtige liste

        // Nulstil inputfelterne
        document.getElementById("AddElement").value = "";
        document.getElementById("Id").value = "";
        document.getElementById("classHU").value = "";
    } else {
        console.error("Udfyld alle felterne korrekt!");
    }
}

// Brug funktionen i eventlisteneren
document.getElementById("addButton").addEventListener("click", addItemToList);


//knap som skrifter farven på baggrunden.
const btn = document.createElement("button");
btn.textContent = "Skift Baggrundsfarve";
document.body.appendChild(btn);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);

//keydown event, virker npr man trykker på en key på tastaturet 
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
}); 

