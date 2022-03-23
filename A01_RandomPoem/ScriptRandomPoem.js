"use strict";
var ScriptRandomPoem;
(function (ScriptRandomPoem) {
    //Arrays zu Erstellung der Zufallsgedichte
    let subjekt = ["Gandalf", "Frodo", "Bilbo", "Gimli", "Legolas", "Aragorn", "Sam", "Pippin", "Gollum"];
    let prädikat = ["tötet", "kämpft", "reitet", "sticht", "rettet", "verfolgt", "bläst", "fliegt", "läuft"];
    let objekte = ["die Uruk-hai", "Kankra", "Schwert", "Andúril", "Brego", "das Horn von Gondor", "nach Bruchtal", "zum Schicksalsberg"];
    //console.log(subjekt, prädikat, objekte);
    //For-Schleife um Gedicht zu erstellen bis Wert 1 erreicht ist
    for (let index = subjekt.length; index >= 1; index--) {
        //console.log(index);
        let poemFinal = getVerse(subjekt, prädikat, objekte);
        console.log(poemFinal);
    }
    function getVerse(_subjekt, _prädikat, _objekte) {
        let v1 = Math.floor(Math.random() * _subjekt.length);
        let v2 = Math.floor(Math.random() * _prädikat.length);
        let v3 = Math.floor(Math.random() * _objekte.length);
        let randomSentence = subjekt[v1] + " " + prädikat[v2] + " " + objekte[v3] + ".";
        //console.log(randomSentence);
        _subjekt.splice(v1, 1);
        _prädikat.splice(v2, 1);
        _objekte.splice(v3, 1);
        return randomSentence;
    }
})(ScriptRandomPoem || (ScriptRandomPoem = {}));
//# sourceMappingURL=ScriptRandomPoem.js.map