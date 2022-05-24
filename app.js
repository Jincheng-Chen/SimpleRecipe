//Selectors
const resipeInput = document.querySelector('.resipe-input');
const resipeButton = document.querySelector('.resipe-button');
const resipeList = document.querySelector('.resipe-list');

const resipeTitle = document.querySelector('.resipe-title');
const resipeIngredients = document.querySelector('.resipe-ingredients');
const resipeInstructions = document.querySelector('.resipe-instructions');



//Event Listeners
resipeButton.addEventListener('click',addResipe);
resipeList.addEventListener('click',deleteResipe);
//Functions

function addResipe(event){
    // prevent refreshing
    event.preventDefault();

    const resipeDiv= document.createElement("div")
    resipeDiv.classList.add("resipe");

    const newResipeTitle = document.createElement('li');
    newResipeTitle.innerText = resipeTitle .value;
    newResipeTitle.classList.add("resipe-title");
    resipeDiv.appendChild(newResipeTitle);

    const newResipeIngredients = document.createElement('li');
    newResipeIngredients.innerText = resipeIngredients .value;
    newResipeIngredients.classList.add("resipe-ingredients");
    resipeDiv.appendChild(newResipeIngredients);

    const newResipeInstructions = document.createElement('li');
    newResipeInstructions.innerText = resipeInstructions.value;
    newResipeInstructions.classList.add("resipe-instructions");
    resipeDiv.appendChild(newResipeInstructions);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    resipeDiv.appendChild(deleteButton);

    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    checkButton.classList.add("check-button");
    resipeDiv.appendChild(checkButton);

    //fanlly add the resipe to the list

    resipeList.appendChild(resipeDiv);

    newResipeTitle.value = "";
    newResipeIngredients.value="";
    newResipeIngredients.value="";

}

function deleteResipe(event){
    const item = event.target;

    if(item.classList[0] === "delete-button"){
        const resipe = item.parentElement;
        resipe.remove()
    };


}