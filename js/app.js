function recipe(){
    
    let recipeName = prompt('Enter recipe name');
    let body = document.body;
    let divRecipeName = document.createElement('div');
    let showRecipeName = document.createElement('h1');
    
    showRecipeName.innerText = recipeName;
    divRecipeName.id = 'recipeName';
    
    body.appendChild(divRecipeName);
    divRecipeName.appendChild(showRecipeName);


    // experiment
    let ele = document.createElement('div');
    ele.id = 'cntc';
    ele.innerText = 'X';
    ele.onclick = function (){
        let box = document.getElementById('recipeName');
        box.remove();
    }

    divRecipeName.appendChild(ele);
    //
    vnesi = true;
    while (vnesi){
        let recipeIngredients = prompt('Enter the ingredients: ');
        let orderedList = document.createElement('ul');
        let Items = document.createElement('li');
        Items.onclick = function(){
            Items.remove();
        }
        Items.innerText = recipeIngredients;
        orderedList.appendChild(Items)
        divRecipeName.appendChild(orderedList);
        vnesi = confirm("Would you like to add more ingredients?");
    }
}


