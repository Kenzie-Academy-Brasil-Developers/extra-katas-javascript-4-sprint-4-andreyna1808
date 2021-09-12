// VARIÁVEIS -
const gotCitiesCSV = "King's Landing , Braavos , Volantis , Old Valyria , Free Cities , Qarth , Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// PRINCIPAL
const showResults = (texto, resultado) => {
    const section = document.querySelector("section")
    const div = document.createElement('div')
    const p = document.createElement('p')
    const kataTitle = document.createElement('h2')
    
    p.textContent = JSON.stringify(resultado)
    kataTitle.innerHTML = texto
    div.appendChild(kataTitle)
    div.appendChild(p)
    section.appendChild(div)
}

//  KATAS -- ATIVIDADE
function kata1() {
    let regras = showResults("Kata 1", gotCitiesCSV)
   return regras
}
kata1()

function kata2(){
    let regras = showResults("Kata 2", bestThing.split(" "))
    return regras
}
kata2()

function kata3(){
    let regras = showResults("Kata 3", gotCitiesCSV.replace(/, /g, "; "))
    return regras
}
kata3()

function kata4(){
    let regras = showResults("Kata 4", lotrCitiesArray.join(", "))
    return regras
}
kata4()

function kata5(){
    let regras = showResults("Kata 5", lotrCitiesArray.slice(0, 5))
    return regras
}
kata5()

function kata6(){
    let regras = showResults("Kata 6", lotrCitiesArray.slice(3, 8))
    return regras
}
kata6()

function kata7(){
    let regras = showResults("Kata 7", lotrCitiesArray.slice(2, 5))
    return regras
}
kata7()

function kata8(){
    lotrCitiesArray.splice(2, 1)
    let regras = showResults("Kata 8", lotrCitiesArray)
    return regras
}
kata8()

function kata9(){
    lotrCitiesArray.splice(5, 2)
    let regras = showResults("Kata 9", lotrCitiesArray)
    return regras
}
kata9()

function kata10(){
    lotrCitiesArray.splice(2, 0, "Rohan")
    let regras = showResults("Kata 10", lotrCitiesArray)
    return regras
}
kata10()

function kata11(){
    lotrCitiesArray.splice(5, 1, "Deadest Marshes")
    let regras = showResults("Kata 11", lotrCitiesArray)
    return regras
}
kata11()

function kata12(){
    let output = bestThing.split("").slice(0, 14)
    let regras = showResults("Kata 12", output.join(""))
    return regras
}

kata12()

function kata13(){
    let output = bestThing.split("").slice(69, 81)
    let regras = showResults("Kata 13", output.join(""))
    return regras
}
kata13()

function kata14(){
    let output = bestThing.split("").slice(23, 38)
    let regras = showResults("Kata 14", output.join(""))
    return regras
}
kata14()

function kata15(){
    let regras = showResults("Kata 15", bestThing.substring(69, 81))
    return regras
}
kata15()

function kata16(){
    let regras = showResults("Kata 16", bestThing.substring(23, 38))
    return regras
}
kata16()

function kata17(){
    lotrCitiesArray.pop()
    let regras = showResults("Kata 17", lotrCitiesArray)
    return regras
}
kata17()

function kata18(){
    lotrCitiesArray.push("Deadest Marshes")
    let regras = showResults("Kata 18", lotrCitiesArray)
    return regras
}
kata18()

function kata19(){
    lotrCitiesArray.shift()
    let regras = showResults("Kata 19", lotrCitiesArray)
    return regras
}
kata19()

function kata20(){
    lotrCitiesArray.unshift("Mordor")
    let regras = showResults("Kata 20", lotrCitiesArray)
    return regras
}
kata20()

//
// -- BONUS --
//

showResults(' |--- AOBAHH --- BÔNUS ---| ')

function bonus1(){
    let extra = showResults("Kata Bonus 1", bestThing.split(" ").indexOf("only"))
    return extra
}
bonus1()

function bonus2(){
    let extra= showResults("Kata Bonus 2", bestThing.split(" ").indexOf("bit"))
    return extra
}
bonus2()

function bonus3(){
    let gotCities = gotCitiesCSV.split(",")
    let extra = []
    // Chamar apenas os nomes com vogais repetidas 
    for (let i = 0; i < gotCities.length; i++) {
        if (gotCities[i].includes("aa") ||
        gotCities[i].includes("ii") ||
        gotCities[i].includes("ee") ||
        gotCities[i].includes("oo") ||
        gotCities[i].includes("uu")) {
            extra.push(gotCities[i])
        }
    }
    showResults("Kata Bonus 3", extra)
    return extra
}
bonus3()

function bonus4(){
    let extra = []
    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes("or")) {
            extra.push(lotrCitiesArray[i])
      }
    }
    showResults("Kata Bonus 4", extra)
    return extra
}
bonus4()

function bonus5(){
    let info = bestThing.split(" ")
    let extra = []
    for (let i = 0; i < info.length; i++) {
        if (info[i].startsWith("b")) {
            extra.push(info[i])
        }
    }
    showResults("Kata Bonus 5", extra)
    return extra
}
bonus5()

function bonus6(){
    if (lotrCitiesArray.includes("Mirkwood")) {
        let extra = showResults("Kata Bonus 6", "Sim")
        return extra
    }
    else{
    let extra = showResults("Kata Bonus 6", "Não")
    return extra
    }
}
bonus6()

function bonus7(){
    if (lotrCitiesArray.includes("Hollywood")) {
        let extra =showResults("Kata Bonus 7", "Sim")
        return extra
    }
    else {
        let extra = showResults("Kata Bonus 7", "Não")
        return extra
    }
}
bonus7()

function bonus8(){
    let extra = showResults("Kata Bonus 8", lotrCitiesArray.indexOf("Mirkwood"))
    return extra
}
bonus8()

function bonus9(){
    let extra = [];
    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i].includes(' ')){
            extra = lotrCitiesArray[i];
            showResults('Katas Bonus 9', extra);
            return extra
        }
    }      
}
bonus9()

function bonus10(){
    let extra = showResults("Kata Bonus 10", lotrCitiesArray.reverse())
    return extra    
}
bonus10()

function bonus11(){
    let extra = showResults("Kata Bonus 11", lotrCitiesArray.sort())
    return extra    
}
bonus11()

function bonus12(){
    let extra= showResults("Kata Bonus 12", lotrCitiesArray.sort((a, b) => a.length - b.length))
    return extra    
}
bonus12()
