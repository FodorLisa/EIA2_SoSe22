namespace ScriptRandomPoem {
    //Arrays zu Erstellung der Zufallsgedichte
    let subjekt: string [] = ["Gandalf", "Frodo", "Bilbo", "Gimli", "Legolas", "Aragorn", "Sam", "Pippin", "Gollum"];
    let prädikat: string [] = ["tötet", "kämpft", "reitet", "sticht", "rettet", "verfolgt", "bläst", "fliegt", "läuft"];
    let objekte: string [] = ["die Uruk-hai", "Kankra", "Schwert", "Andúril", "Brego", "das Horn von Gondor", "nach Bruchtal", "zum Schicksalsberg", "Rohan"];

    //console.log(subjekt, prädikat, objekte);

    //For-Schleife um Gedicht zu erstellen bis Wert 1 erreicht ist
    for (let index: number = subjekt.length; index >= 1; index--) {
        //console.log(index);

        let poemFinal: string = getVerse(subjekt, prädikat, objekte);
        console.log(poemFinal);

    }

    function getVerse(_subjekt: string[], _prädikat: string[], _objekte: string[]) {
        let v1: number = Math.floor(Math.random() * _subjekt.length);
        let v2: number = Math.floor(Math.random() * _prädikat.length);
        let v3: number = Math.floor(Math.random() * _objekte.length); 

        let randomSentence: string = subjekt [v1] + " " + prädikat [v2] + " " + objekte [v3] + ".";
        //console.log(randomSentence);
        
        _subjekt.splice(v1, 1);
        _prädikat.splice(v2, 1);
        _objekte.splice(v3, 1);

        return randomSentence;
    }
}