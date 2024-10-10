
// les variable de ma TO-DO_List !!!

let nouve = document.getElementById("nouve");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let list1 =document.getElementById("list1");
let nom = document.getElementById("nom");
let task1 = document.getElementById("task1");

// l evennement apres le click pour ajouter des taches

btn1.addEventListener("click", () => {
        console.log("ajouter");
        console.log(nouve.value);

        // list1 = document.createElement("li");
        
        list1.textContent = nouve.value;
        task1.textContent = nouve.value;
});

// l evennement apres le click pour supprimer des taches

btn2.addEventListener("click", () => {
    console.log("supprimer");
    task1.value = "";
});
