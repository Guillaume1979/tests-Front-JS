document.getElementById("accueil").addEventListener("click", function () {
    deleteMain("main");
    const newMain = document.createElement("p");
    var textAjoute = "Retour à l'accueil";
    newMain.innerHTML = textAjoute;
    document.getElementById("main").appendChild(newMain);

})


document.getElementById("texte").addEventListener("click", function () {
    deleteMain("main");
    const newMain = document.createElement("p");
    var textAjoute = "Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est.";
    newMain.innerHTML = textAjoute;
    document.getElementById("main").appendChild(newMain);



})

function deleteMain(elementId) {
    // while (document.getElementById("main").hasChildNodes) {
        document.getElementById("main").removeChild(elementId);
    // }
}