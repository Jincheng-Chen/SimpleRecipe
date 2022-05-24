//JSON Objects
const preLoadedRecipe =  '{"title": "Garlic Shrimp Pasta","ingredients":"Linguine Pasta, Garlic, Butter, Shrimps","instructions":"1. To begin making the Garlic Shrimp Linguine Pasta recipe, Take a large pot of boiling salted water, cook pasta according to package instructions; drain well. Wash it under cold water to stop further cooking, drizzle some olive oil over it and coat the pasta well and keep aside. 2. Season shrimp with salt and pepper, to taste; set aside. 3. Melt 2 tablespoon ..."}';



//Selectors
const resipeInput = document.querySelector('.resipe-input');
const resipeButton = document.querySelector('.resipe-button');
const resipeList = document.querySelector('.resipe-list');

const resipeTitle = document.querySelector('.resipe-title');
const resipeIngredients = document.querySelector('.resipe-ingredients');
const resipeInstructions = document.querySelector('.resipe-instructions');
const clearButton = document.querySelector('.clear-button');
const deleteAllButton = document.querySelector('.deleteAll-button')

//Preload the form
const JSON_Recipe = JSON.parse(preLoadedRecipe);
resipeTitle.value = JSON_Recipe.title;
resipeIngredients.value = JSON_Recipe.ingredients;
resipeInstructions.value = JSON_Recipe.instructions;


//Event Listeners
resipeButton.addEventListener('click',addResipe);
resipeList.addEventListener('click',deleteResipe);
clearButton.addEventListener('click',clearForm);
deleteAllButton.addEventListener('click',deleteAll);

//Functions
function clearForm(event){
    event.preventDefault();

    const item = event.target;

    if(item.classList[0] === "clear-button"){
        resipeTitle.value = "";
        resipeIngredients .value = "";
        resipeInstructions.value = "";
    };


}

function deleteAll(event){
    event.preventDefault();

    resipeList.innerHTML="";

}
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

    // const checkButton = document.createElement("button");
    // checkButton.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    // checkButton.classList.add("check-button");
    // resipeDiv.appendChild(checkButton);

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