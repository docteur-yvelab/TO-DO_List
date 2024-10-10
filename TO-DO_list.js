
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


// convertiseur en binaire !!!

// function textToBinary(text) {
//     let binaryResult = '';

//     for (let i = 0; i < text.length; i++) {
//         // Obtenir le code ASCII de chaque caractère
//         const charCode = text.charCodeAt(i);
//         // Convertir le code ASCII en binaire et le formater sur 8 bits
//         const binaryChar = charCode.toString(2).padStart(8, '0');
//         // Ajouter le binaire à la chaîne de résultat
//         binaryResult += binaryChar + ' '; // Ajoute un espace entre les caractères
//     }

//     return binaryResult.trim(); // Supprime l'espace final
// }

// // Exemple d'utilisation
// const inputText = "134D";
// const binaryOutput = textToBinary(inputText);
// console.log(binaryOutput); // Affiche "01000001 01000010 01000011"